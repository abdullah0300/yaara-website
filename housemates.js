'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)');let manual=false;
try{manual=localStorage.getItem('yaara-reduce-motion')==='true';}catch{}
function setMotion(){const off=manual||reduce.matches;document.body.classList.toggle('reduce-motion',off);const btn=$('#motion-toggle');if(btn){btn.textContent='Motion: '+(off?'off':'on');btn.setAttribute('aria-pressed',String(off));}}
setMotion();reduce.addEventListener('change',setMotion);const motionBtn=$('#motion-toggle');if(motionBtn)motionBtn.addEventListener('click',()=>{manual=!document.body.classList.contains('reduce-motion');try{localStorage.setItem('yaara-reduce-motion',String(manual));}catch{}setMotion();});
document.body.classList.add('js-motion');
const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}}),{threshold:.1});$$('.reveal').forEach(el=>reveal.observe(el));
let ticking=false;function scrollUpdate(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;const max=document.documentElement.scrollHeight-innerHeight;$('.scroll-line').style.width=(max>0?scrollY/max*100:0)+'%';$('.nav-wrap').classList.toggle('scrolled',scrollY>20);});}addEventListener('scroll',scrollUpdate,{passive:true});addEventListener('resize',scrollUpdate);scrollUpdate();

new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('month-visible');}),{threshold:.15}).observe($('.month-sequence'));
const dialog=$('#about-dialog');const demoPriv=$('#demo-privacy');if(dialog&&demoPriv){demoPriv.addEventListener('click',()=>dialog.showModal());$$('.dialog-close,.dialog-close-button').forEach(button=>button.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});}$('#year').textContent=new Date().getFullYear();
