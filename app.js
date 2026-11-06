const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const empty = document.getElementById('empty');
const iframe = document.getElementById('externalGame');
let running = false, raf = 0, x = 100, y = 330, vx = 0, vy = 0, jumping = false;
const keys = {};
function stop() {
  running = false; cancelAnimationFrame(raf);
  canvas.hidden = true; iframe.hidden = true;
  iframe.src = 'about:blank'; empty.hidden = false;
}
function startDemo() {
  stop(); empty.hidden = true; iframe.hidden = true; canvas.hidden = false;
  x=100; y=330; vx=0; vy=0; running=true; loop();
}
function loop() {
  if(!running) return;
  ctx.clearRect(0,0,800,450);
  const sky=ctx.createLinearGradient(0,0,0,450); sky.addColorStop(0,'#142c52'); sky.addColorStop(1,'#080f20'); ctx.fillStyle=sky;ctx.fillRect(0,0,800,450);
  ctx.fillStyle='#203b5d'; for(let i=0;i<800;i+=80)ctx.fillRect(i,290-(i%3)*10,45,160);
  ctx.fillStyle='#29496b';ctx.fillRect(0,390,800,60);
  ctx.fillStyle='#5de0c2';ctx.fillRect(650,350,24,40);
  if(keys.ArrowLeft||keys.a||keys.A)x-=4;
  if(keys.ArrowRight||keys.d||keys.D)x+=4;
  if((keys.Space||keys.ArrowUp)&&!jumping){vy=-13;jumping=true}
  vy+=0.55;y+=vy;if(y>=330){y=330;vy=0;jumping=false}
  x=Math.max(10,Math.min(770,x));
  ctx.fillStyle='#ffcf5a';ctx.fillRect(x,y,30,60);
  ctx.fillStyle='#101827';ctx.fillRect(x+7,y+12,5,5);ctx.fillRect(x+19,y+12,5,5);
  ctx.fillStyle='white';ctx.font='bold 22px system-ui';ctx.fillText('NEON RUNNER',24,38);
  ctx.font='14px system-ui';ctx.fillText('Move: arrows / A-D   Jump: Space',24,62);
  ctx.fillStyle='#a8c7ff';ctx.fillText('Prototype demo — not a cloud PC',24,430);
  raf=requestAnimationFrame(loop);
}
document.getElementById('playDemo').addEventListener('click',startDemo);
document.getElementById('stopGame').addEventListener('click',stop);
document.addEventListener('keydown',e=>{keys[e.key]=true;if([' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))e.preventDefault()});
document.addEventListener('keyup',e=>keys[e.key]=false);
function bindHold(id,key){const b=document.getElementById(id);const on=e=>{e.preventDefault();keys[key]=true};const off=e=>{e.preventDefault();keys[key]=false};b.addEventListener('pointerdown',on);['pointerup','pointercancel','pointerleave'].forEach(ev=>b.addEventListener(ev,off))}
bindHold('left','ArrowLeft');bindHold('right','ArrowRight');bindHold('jump','Space');
document.getElementById('gameFile').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f)return;
  if(!/\.html?$/i.test(f.name)){alert('This prototype accepts one .html file only.');return}
  stop(); const url=URL.createObjectURL(f); iframe.src=url; iframe.hidden=false; empty.hidden=true;
});
document.getElementById('openTera').addEventListener('click',()=>{
  const value=document.getElementById('teraLink').value.trim();
  if(!value){alert('Paste your TeraBox shared link first.');return}
  try{const u=new URL(value);if(!['http:','https:'].includes(u.protocol))throw 0;window.open(u.href,'_blank','noopener')}
  catch{alert('Please enter a valid http/https share link.')}
});
