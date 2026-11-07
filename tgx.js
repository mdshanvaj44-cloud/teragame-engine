/* TGX 5.2 manifest format and package operations */
(() => {
  "use strict";
  const TG=window.TG;
  function build(game){
    const files=(game.files||[]).map(f=>({name:f.name,size:f.size||0,mime:f.type||"application/octet-stream"}));
    return {
      format:"TERAGAME-TGX",formatVersion:"5.2",
      package:{id:game.id||TG.makeId("tgx"),createdAt:new Date().toISOString(),schema:"tgx-manifest-v1"},
      game:{title:game.name,version:game.version||"1.0.0",platform:game.type,description:game.desc||"",icon:game.emoji||"🎮"},
      content:{files,sourceUrl:game.url||null,storageProvider:game.type==="TeraBox"?"terabox":"user-managed",storageReference:game.url||null},
      runtime:{kind:game.type==="Browser"?"browser":game.type==="Android APK"?"android-install":game.type==="PC Cloud"?"pc-cloud-stream":"terabox-reference",entryPoint:game.entryPoint||null,requirements:game.type==="PC Cloud"?["Remote PC with GPU","Browser-compatible streaming endpoint","Input forwarding"]:game.type==="Android APK"?["Android device","User-approved APK installation"]:game.type==="Browser"?["Compatible browser HTML/JS/WASM assets"]:["TeraBox share access"]},
      integrity:{algorithm:"none",note:"File checksums are not calculated in this browser-only build."},
      notes:["TGX is a manifest and game-package descriptor.","It does not convert, emulate or execute incompatible binaries.","Original game files must be stored separately or bundled by a compatible packaging tool."]
    };
  }
  function validate(doc){
    if(!doc||doc.format!=="TERAGAME-TGX"||!doc.game||!doc.game.title)throw new Error("This is not a valid TeraGame TGX manifest.");
    const p=doc.game.platform;
    if(!["Browser","Android APK","PC Cloud","TeraBox"].includes(p))throw new Error("Unsupported TGX platform.");
    return doc;
  }
  function exportManifest(doc){const text=JSON.stringify(doc,null,2);TG.state.lastManifest=doc;TG.$("tgxPreview").textContent=text;TG.download((doc.game.title||"game").replace(/[^a-z0-9-_]/gi,"_")+".tgx",text,"application/vnd.teragame.tgx+json");return doc}
  function importManifest(file){return file.text().then(text=>validate(JSON.parse(text)))}
  window.TGX={build,validate,exportManifest,importManifest};
})();