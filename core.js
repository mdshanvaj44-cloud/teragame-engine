/* TeraGame Engine 5.2 — shared state and safe utilities */
(() => {
  "use strict";
  const KEYS={games:"teragame52.games",transfers:"teragame52.transfers",steam:"teragame52.steam"};
  const starter=[
    {id:"tgx-demo-neon",name:"Neon Runner",type:"Browser",desc:"Small included browser demo. Use Run to play.",emoji:"🏎️",demo:true,createdAt:Date.now(),favorite:false,tag:"Included demo"},
    {id:"tgx-pc-placeholder",name:"PC Cloud Game Slot",type:"PC Cloud",desc:"Add your remote PC streaming URL to launch a PC game.",emoji:"🖥️",createdAt:Date.now()-1000,favorite:false,tag:"Host required"},
    {id:"tgx-android-slot",name:"Android APK Slot",type:"Android APK",desc:"Add an APK download URL; Android handles installation.",emoji:"📱",createdAt:Date.now()-2000,favorite:false,tag:"Android hand-off"},
    {id:"tgx-terabox-slot",name:"TeraBox Storage Slot",type:"TeraBox",desc:"Attach a TeraBox share link to a stored game.",emoji:"☁️",createdAt:Date.now()-3000,favorite:false,tag:"Storage reference"}
  ];
  function load(key,fallback){try{const v=JSON.parse(localStorage.getItem(key));return v??fallback}catch{return fallback}}
  const state={games:load(KEYS.games,starter),transfers:load(KEYS.transfers,[]),filter:"All",sort:"new",selectedFiles:[],lastManifest:null,playerUrl:null};
  const $=id=>document.getElementById(id);
  const safeUrl=value=>{try{const u=new URL(String(value||""));return ["https:","http:"].includes(u.protocol)?u.href:""}catch{return ""}};
  const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function persist(){localStorage.setItem(KEYS.games,JSON.stringify(state.games));localStorage.setItem(KEYS.transfers,JSON.stringify(state.transfers))}
  function toast(msg){const el=$("toast");if(!el)return;el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2300)}
  function addTransfer(name,kind){state.transfers.unshift({id:"tr-"+Date.now(),name,kind,at:new Date().toISOString()});persist();if(window.TGApp)window.TGApp.renderTransfers()}
  function download(name,content,mime="application/json"){const blob=content instanceof Blob?content:new Blob([content],{type:mime});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1800);addTransfer(name,"Export");toast("Export created: "+name)}
  function makeId(prefix="game"){return prefix+"-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7)}
  window.TG={KEYS,state,$,load,safeUrl,escapeHtml,persist,toast,addTransfer,download,makeId};
})();