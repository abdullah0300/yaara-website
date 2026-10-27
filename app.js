'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];


const money=n=>new Intl.NumberFormat('en-PK',{maximumFractionDigits:2}).format(n);
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let manualReduce=false;
try{manualReduce=localStorage.getItem('yaara-reduce-motion')==='true';}catch{}
function setMotion(){const off=manualReduce||reduced.matches;document.body.classList.toggle('reduce-motion',off);document.body.classList.toggle('js-motion',!off);const btn=$('#motion-toggle');if(btn){btn.textContent='Motion: '+(off?'off':'on');btn.setAttribute('aria-pressed',String(off));}}
setMotion();reduced.addEventListener('change',setMotion);
const motionBtn=$('#motion-toggle');if(motionBtn)motionBtn.addEventListener('click',()=>{manualReduce=!document.body.classList.contains('reduce-motion');try{localStorage.setItem('yaara-reduce-motion',String(manualReduce));}catch{}setMotion();});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}});},{threshold:.12});$$('.reveal').forEach(el=>revealObserver.observe(el));
const stories=[
`<div class="ledger-scene ledger-expense"><p class="ledger-kicker">Late-night pizza &amp; chai</p><div class="ledger-amount"><span>PKR</span><strong>6,000</strong></div><p class="ledger-caption">You covered the tab.</p><div class="ledger-facts"><div><span>Shared with</span><strong>You, Ayesha & Hamza</strong></div><div><span>Receipt</span><strong class="ledger-attachment"><span aria-hidden="true">↳</span> Attached <span aria-hidden="true">✓</span></strong></div></div><span class="ledger-rule" aria-hidden="true"></span></div>`,
`<div class="ledger-scene ledger-shares"><p class="ledger-kicker">One table. Three equal shares.</p><div class="ledger-amount"><span>PKR</span><strong>6,000</strong></div><svg class="share-branches" viewBox="0 0 450 70" fill="none" aria-hidden="true"><path d="M225 0V14C225 43 75 20 75 69"/><path d="M225 0V69"/><path d="M225 0V14C225 43 375 20 375 69"/></svg><div class="ledger-share-grid"><div><span>You <small>paid</small></span><strong>2,000</strong></div><div><span>Ayesha</span><strong>2,000</strong></div><div><span>Hamza</span><strong>2,000</strong></div></div><div class="ledger-total"><span>You’re owed</span><strong>PKR 4,000</strong></div></div>`,
`<div class="ledger-scene ledger-repayment"><p class="ledger-kicker"><span class="ledger-check" aria-hidden="true">✓</span> Ayesha sent her share</p><div class="ledger-amount"><span>PKR</span><strong>1,000</strong></div><p class="ledger-caption">Partial payment recorded. No awkward follow-up.</p><div class="repayment-track" aria-hidden="true"><span></span></div><div class="repayment-halves"><div><span>Returned</span><strong>PKR 1,000</strong></div><div><span>Still owed by Ayesha</span><strong>PKR 1,000</strong></div></div><div class="ledger-origin"><span>Her original share</span><strong>PKR 2,000</strong></div></div>`
];
let currentStory=-1;let storyLockUntil=0;
function showStory(i){if(i===currentStory)return;currentStory=i;const box=$('#story-demo');box.classList.remove('animate');box.innerHTML=stories[i];void box.offsetWidth;box.classList.add('animate');$('.stage-counter').textContent=`0${i+1} / 03`;$$('[data-jump]').forEach((b,index)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-pressed',String(i===index));});$$('.story-step').forEach((s,index)=>s.classList.toggle('active',i===index));}
showStory(0);
$$('[data-jump]').forEach(button=>button.addEventListener('click',()=>{storyLockUntil=Date.now()+3000;showStory(Number(button.dataset.jump));}));
let scheduled=false;
function onScroll(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;const max=document.documentElement.scrollHeight-innerHeight;$('.scroll-line').style.width=(max>0?scrollY/max*100:0)+'%';$('.nav-wrap').classList.toggle('scrolled',scrollY>20);if(innerWidth>540&&Date.now()>storyLockUntil){const steps=$$('.story-step');let closest=0,dist=Infinity;steps.forEach((s,i)=>{const r=s.getBoundingClientRect(),d=Math.abs(r.top+r.height*.5-innerHeight*.52);if(d<dist){dist=d;closest=i;}});const storyRect=$('.story-grid').getBoundingClientRect();if(storyRect.top<innerHeight&&storyRect.bottom>0)showStory(closest);}if(!document.body.classList.contains('reduce-motion')){$$('[data-parallax]').forEach(el=>{const rect=el.parentElement.getBoundingClientRect();if(rect.top<innerHeight&&rect.bottom>0)el.style.transform=`translateY(${(rect.top-innerHeight/2)*Number(el.dataset.parallax)}px)`;});}});}
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);onScroll();
$$('.story-step').forEach((step,i)=>step.addEventListener('click',()=>{if(innerWidth<=540)showStory(i);}));
let mode='equal';let percentage=[50,30,20];let exact=[2500,2000,1500];
const names=['You','Ayesha','Hamza'],initials=['Y','A','H'];
function totalCents(){const n=Number($('#expense-total').value);return Number.isFinite(n)?Math.round(n*100):0;}
function distribute(total,weights){const sum=weights.reduce((a,b)=>a+b,0);if(sum<=0)return weights.map(()=>0);const precise=weights.map(w=>total*w/sum);const cents=precise.map(Math.floor);let rest=total-cents.reduce((a,b)=>a+b,0);const order=precise.map((n,i)=>({i,frac:n-cents[i]})).sort((a,b)=>b.frac-a.frac||a.i-b.i);for(let k=0;k<rest;k++)cents[order[k%order.length].i]++;return cents;}
function drawShares(){const rows=$('#share-rows');rows.innerHTML=names.map((n,i)=>`<div class="share-row"><span class="avatar">${initials[i]}</span><label for="share-${i}">${n}<small>${i===0?'You paid for this':'Sharing this expense'}</small></label>${mode==='equal'?`<output id="share-${i}" aria-label="${n} share"></output>`:`<div><div class="share-input-wrap"><input class="share-input" id="share-${i}" data-share="${i}" type="number" min="0" max="${mode==='percentage'?100:1000000}" step="0.01" aria-label="${n} ${mode==='percentage'?'percentage':'amount in PKR'}" value="${mode==='percentage'?percentage[i]:exact[i]}"><span>${mode==='percentage'?'%':'PKR'}</span></div>${mode==='percentage'?`<div class="computed" id="computed-${i}"></div>`:''}</div>`}</div>`).join('');$$('[data-share]').forEach(input=>input.addEventListener('input',()=>{const i=Number(input.dataset.share),value=Number(input.value);if(mode==='percentage')percentage[i]=value;else exact[i]=value;calculate();}));calculate();}
function calculate(){const rawTotal=totalCents(),validTotal=rawTotal>0&&rawTotal<=100000000&&$('#expense-total').validity.valid,total=validTotal?rawTotal:0;let error='',shares=[];if(!validTotal)error='Enter an expense from PKR 1 to PKR 1,000,000.';if(mode==='equal'){shares=distribute(Math.max(0,total),[1,1,1]);shares.forEach((n,i)=>{$('#share-'+i).textContent='PKR '+money(n/100);});$('#split-description').textContent='Three people. One equal split.';}else if(mode==='percentage'){const sum=percentage.reduce((a,b)=>a+b,0);const invalid=percentage.some(n=>!Number.isFinite(n)||n<0||n>100)||$$('[data-share]').some(input=>input.value===''||!input.validity.valid);if(invalid||Math.abs(sum-100)>.000001)error=error||'Your percentages need to add up to 100%.';shares=distribute(Math.max(0,total),percentage.map(n=>Number.isFinite(n)&&n>=0?n:0));shares.forEach((n,i)=>{$('#computed-'+i).textContent=!error?'PKR '+money(n/100):'—';});$('#split-description').textContent='The ratio you choose. The shares you agree.';}else{shares=exact.map(n=>Math.round(n*100));const sum=shares.reduce((a,b)=>a+b,0);if(exact.some(n=>!Number.isFinite(n)||n<0)||$$('[data-share]').some(input=>input.value===''||!input.validity.valid))error=error||'Enter a valid, non-negative amount for each person.';else if(sum!==total)error=error||`Shares total PKR ${money(sum/100)}. Match the PKR ${money(total/100)} expense.`;$('#split-description').textContent='Different shares. Every rupee accounted for.';}$('#split-error').textContent=error;$('#expense-total').setAttribute('aria-invalid',String(!validTotal));$('#split-total-label').textContent=error?'Check your split':'PKR '+money(total/100)+' total ✓';updateSplitVisual(total,shares,error);return{total,shares,error};}
function updateSplitVisual(total,shares,error){const visual=$('.split-proportions');if(!visual)return;visual.classList.toggle('invalid',Boolean(error));$$('.portion').forEach((el,i)=>{const ratio=!error&&total>0?Math.max(0,shares[i]||0)/total:0;el.style.flexBasis=(ratio*100)+'%';el.classList.toggle('tiny',ratio<.13);el.querySelector('span').textContent=ratio>0?(ratio*100).toLocaleString('en-US',{maximumFractionDigits:1})+'%':'';});const range=$('#your-share-range');if(!error&&total>0){range.value=String(shares[0]/total*100);range.setAttribute('aria-valuetext',Number(range.value).toLocaleString('en-US',{maximumFractionDigits:1})+' percent for you');}}
function activatePercentage(values){mode='percentage';percentage=values;$$('[data-mode]').forEach(el=>{const active=el.dataset.mode===mode;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});drawShares();}
$('#your-share-range').addEventListener('input',event=>{const you=Number(event.target.value),weights=percentage.slice(1).map(n=>Number.isFinite(n)&&n>=0?n:0);const tail=distribute(Math.round((100-you)*100),weights.some(n=>n>0)?weights:[1,1]);activatePercentage([you,tail[0]/100,tail[1]/100]);});
$('#try-uneven').addEventListener('click',()=>activatePercentage([50,30,20]));
$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;if(mode==='exact'){const total=totalCents();exact=distribute(Math.max(0,total),[5,3,2]).map(n=>n/100);}$$('[data-mode]').forEach(el=>{const active=el===b;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});drawShares();}));$('#expense-total').addEventListener('input',calculate);drawShares();
const people={
home:{image:'people-home.webp',alt:'Three housemates unpacking fresh groceries together in a sunlit kitchen.',heading:'A home together.<br>A clearer month.',body:'Someone gets the groceries. Someone covers the internet. Keep the shared costs and repayments together, even when different people pay.'},
trip:{image:'people-trip.webp',alt:'Friends sharing chai at a roadside stop overlooking the mountains of northern Pakistan.',heading:'Plan the getaway.<br>Keep the costs clear.',body:'Bookings before you go. Different payers along the way. Record who joined each expense, then see what’s left to repay in each currency.'},
couple:{image:'people-couple.webp',alt:'A couple passing toast and pouring chai at their breakfast table.',heading:'Your lives overlap.<br>Your shares can differ.',body:'For couples who choose to share some costs and keep other finances separate. Record the split you’ve agreed on, whether it’s equal, exact, or a percentage.'}
};
let activePeople='';
function showPeople(key){if(activePeople===key)return;activePeople=key;const data=people[key],panel=$('#people-panel');panel.classList.remove('animate');panel.innerHTML=`<h3 class="people-accessible-title">${data.heading.replace('<br>',' ')}</h3><p>${data.body}</p>`;panel.setAttribute('aria-labelledby','tab-'+key);void panel.offsetWidth;panel.classList.add('animate');$$('[data-person]').forEach(b=>{const selected=b.dataset.person===key;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});}
$$('[data-person]').forEach((b,i)=>{b.addEventListener('click',()=>showPeople(b.dataset.person));b.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&matchMedia('(hover:hover)').matches&&!$('.people-gallery').matches(':focus-within'))showPeople(b.dataset.person);});b.addEventListener('keydown',e=>{const buttons=$$('[data-person]');let next;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%buttons.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i-1+buttons.length)%buttons.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=buttons.length-1;else return;e.preventDefault();buttons[next].focus();showPeople(buttons[next].dataset.person);});});showPeople('home');
const dialog=$('#about-dialog');const demoPriv=$('#demo-privacy');if(dialog&&demoPriv){demoPriv.addEventListener('click',()=>dialog.showModal());$$('.dialog-close,.dialog-close-button').forEach(b=>b.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});}
$('#year').textContent=new Date().getFullYear();

// The hero's words gently separate as you leave; the shared "Ours" stays anchored.
const editorialHero=$('.hero-editorial');
if(editorialHero){let heroFrame=false;const updateHero=()=>{if(heroFrame)return;heroFrame=true;requestAnimationFrame(()=>{heroFrame=false;const active=innerWidth>540&&!document.body.classList.contains('reduce-motion'),progress=active?Math.min(Math.max(scrollY/700,0),1):0;editorialHero.style.setProperty('--hero-shift',`${progress*26}px`);editorialHero.style.setProperty('--photo-shift',`${progress*-22}px`);});};window.addEventListener('scroll',updateHero,{passive:true});window.addEventListener('resize',updateHero);updateHero();}

// The thread untangles on its own while the illustration is visible.
const looseEnds=$('.unravel'),threadScene=$('#thread-scene');
if(looseEnds&&threadScene){
  let threadVisible=false,threadTimer;
  const clearThread=()=>clearTimeout(threadTimer);
  const prefersStill=()=>reduced.matches||document.body.classList.contains('reduce-motion');
  const playThread=()=>{
    clearThread();
    if(prefersStill()){looseEnds.classList.add('is-clear');return;}
    if(!threadVisible||document.hidden){looseEnds.classList.remove('is-clear');return;}
    looseEnds.classList.remove('is-clear');
    threadTimer=setTimeout(()=>{
      looseEnds.classList.add('is-clear');
      threadTimer=setTimeout(playThread,4200);
    },1800);
  };
  new IntersectionObserver(entries=>{
    const visible=entries[0].isIntersecting&&entries[0].intersectionRatio>=.35;
    if(visible!==threadVisible){threadVisible=visible;playThread();}
  },{threshold:[0,.35]}).observe(threadScene);
  new MutationObserver(playThread).observe(document.body,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',playThread);
  playThread();
}
