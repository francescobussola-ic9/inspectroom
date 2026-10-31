/* Intro iniziale INSPECTROOM — SVG originale incorporato nel DOM. */
(() => {
  const splash=document.getElementById('introScreen');
  if(!splash) return;
  let animationEnded=false, pageLoaded=document.readyState==='complete', dismissed=false;
  const finish=()=>{
    if(dismissed || !animationEnded || !pageLoaded) return;
    dismissed=true;
    splash.classList.add('intro-out');
    window.setTimeout(()=>{
      splash.remove();
      window.dispatchEvent(new Event('inspectroom:intro-finished'));
    },850);
  };
  window.addEventListener('load',()=>{pageLoaded=true;finish();},{once:true});
  // Anche in caso di risorsa esterna bloccata, non lasciare mai il portale coperto.
  window.setTimeout(()=>{animationEnded=true;pageLoaded=true;finish();},7500);
  window.setTimeout(()=>{animationEnded=true;finish();},3200);
(()=>{
'use strict';
const NS='http://www.w3.org/2000/svg';
const q=id=>document.getElementById('introLogoScene')?.querySelector('#'+id);
const route=q('trace-progress'), glowing=q('trace-progress-glow');
const orb=q('orb-core'), aura=q('orb-aura'), group=q('scattering');

const core=q('pulse-core'), rings=[q('pulse-ring-1'),q('pulse-ring-2'),q('pulse-ring-3')];
const length=route.getTotalLength(), travel=2100, duration=2820, vertex=route.getPointAtLength(length);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const smooth=(x)=>{x=clamp(x,0,1);return x*x*(3-2*x)};
const tangentStart=route.getPointAtLength(length-6);
const angle=Math.atan2(vertex.y-tangentStart.y,vertex.x-tangentStart.x);
// Tracce secondarie brevi: l’evento è un piccolo bagliore con pochi indizi di traiettorie.
const directions=[
  {rot:-0.30, len:53, bend:-5, color:'#a4ddff', width:1.6, op:.70},
  {rot:-0.10, len:69, bend:-2, color:'#e7f8ff', width:1.9, op:.91},
  {rot: 0.10, len:57, bend: 3, color:'#bceaff', width:1.55, op:.77},
  {rot: 0.28, len:40, bend: 6, color:'#6ec8ff', width:1.3, op:.54}
];
const tracks=directions.map((d)=>{
 const theta=angle+d.rot, ux=Math.cos(theta),uy=Math.sin(theta),nx=-uy,ny=ux;
 const cx=vertex.x+ux*d.len*.48+nx*d.bend*.12;
 const cy=vertex.y+uy*d.len*.48+ny*d.bend*.12;
 const ex=vertex.x+ux*d.len+nx*d.bend;
 const ey=vertex.y+uy*d.len+ny*d.bend;
 const path=document.createElementNS(NS,'path');
 path.setAttribute('d',`M${vertex.x} ${vertex.y} Q${cx} ${cy} ${ex} ${ey}`);
 path.setAttribute('fill','none');path.setAttribute('stroke',d.color);
 path.setAttribute('stroke-width',d.width);path.setAttribute('stroke-linecap','round');
 path.setAttribute('opacity','0');group.appendChild(path);
 return {path,total:path.getTotalLength(),op:d.op};
});
const vertexFlash=document.createElementNS(NS,'circle');
vertexFlash.setAttribute('cx',vertex.x);vertexFlash.setAttribute('cy',vertex.y);
vertexFlash.setAttribute('fill','url(#orbAura)');vertexFlash.setAttribute('r','17');vertexFlash.setAttribute('opacity','0');
group.appendChild(vertexFlash);
// Evento del rivelatore agganciato alla posizione reale della prima O.
let hitDist=0, best=Infinity;
for(let j=0;j<=400;j++){
 const d=length*j/400, pt=route.getPointAtLength(d);
 const delta=Math.hypot(pt.x-835,pt.y-603);
 if(delta<best){best=delta;hitDist=d;}
}
const hitTime=travel*hitDist/length;
const radialPulse=(t,delay,amplitude)=>{
  const dt=t-hitTime-delay;
  if(dt<0)return 0;
  // impulsi successivi, più deboli e leggermente più larghi all'esterno
  const u=dt/(160+delay*.25);
  return amplitude*Math.exp(-Math.pow((u-.38)/.32,2));
};
let elapsed=0,last=null,running=true;
function draw(t){
 const p=clamp(t/travel,0,1),dist=length*p;
 for(const node of [route,glowing]){
   node.style.strokeDasharray=`${Math.max(0,dist)} ${length+5}`;
   node.style.strokeDashoffset='0';
 }
 const point=route.getPointAtLength(dist);
 orb.setAttribute('cx',point.x);orb.setAttribute('cy',point.y);
 aura.setAttribute('cx',point.x);aura.setAttribute('cy',point.y);
 // Pulsazione radiale: prima il nucleo, poi tre anelli in sequenza.
 const intensities=[
   radialPulse(t,0,1),
   radialPulse(t,75,.72),
   radialPulse(t,150,.46),
   radialPulse(t,225,.26)
 ];
 core.setAttribute('r',String(12+21*intensities[0]));
 core.setAttribute('opacity',String(.98*intensities[0]));
 rings.forEach((el,i)=>{
   el.setAttribute('opacity',String(intensities[i+1]));
   el.setAttribute('stroke-width',String(1.35+2.4*intensities[i+1]));
 });
 // Nessuna pausa: le tracce iniziano quando termina il percorso.
 const st=t-travel;
 const eventProgress=clamp(st/175,0,1);
 const visibility=st<0?0:Math.pow(1-clamp(Math.max(0,st-95)/390,0,1),1.4);
 for(const item of tracks){
   const d=item.total*eventProgress;
   item.path.style.strokeDasharray=`${d} ${item.total+4}`;
   item.path.style.strokeDashoffset='0';
   item.path.setAttribute('opacity',String(item.op*visibility));
 }
 const glowFade=st<0?0:Math.pow(1-clamp(Math.max(0,st-60)/360,0,1),1.7);
 vertexFlash.setAttribute('r',String(12+17*clamp(st/260,0,1)));
 vertexFlash.setAttribute('opacity',String(.56*glowFade));
 if(t>=duration){running=false;}
}
function frame(now){
 if(last===null)last=now;
 const dt=Math.min(now-last,50);last=now;
 if(running)elapsed=Math.min(duration,elapsed+dt);
 draw(elapsed);requestAnimationFrame(frame);
}


draw(0);requestAnimationFrame(frame);
})();
})();
