/* One shared navigation for every Yaara story. */
(()=>{'use strict';
const header=document.querySelector('.yaara-header');
if(!header) return;
const navigation=header.querySelector('.yaara-navigation'),
      audiences=header.querySelector('.yaara-audiences'),
      trigger=header.querySelector('.yaara-audience-toggle'),
      menu=header.querySelector('.yaara-menu-toggle'),
      backdrop=document.querySelector('.yaara-nav-backdrop'),
      mobile=matchMedia('(max-width:800px)');
let audienceOpen=false,menuOpen=false;
const audienceLinks=[...header.querySelectorAll('.yaara-audience')];
const current=location.pathname.split('/').pop();
audienceLinks.forEach(link=>{if(link.getAttribute('href')===current){link.setAttribute('aria-current','page');const cur=link.querySelector('.yaara-current');if(cur)cur.hidden=false;if(trigger)trigger.classList.add('has-current');}});
function lockPage(lock){document.body.classList.toggle('yaara-navigation-open',lock);document.querySelectorAll('main,footer').forEach(el=>el.inert=lock);}
function setAudience(open,returnFocus=false){if(!audiences||!trigger)return;audienceOpen=open;header.dataset.audienceOpen=String(open);trigger.setAttribute('aria-expanded',String(open));audiences.hidden=!open;if(backdrop)backdrop.hidden=!open||mobile.matches;if(returnFocus)trigger.focus();}
function setMenu(open,returnFocus=false){if(!menu)return;menuOpen=open;header.dataset.menuOpen=String(open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');const lbl=menu.querySelector('.yaara-menu-label');if(lbl)lbl.textContent=open?'Close':'Menu';lockPage(open&&mobile.matches);if(!open)setAudience(false);if(returnFocus)menu.focus();}
if(trigger) trigger.addEventListener('click',()=>setAudience(!audienceOpen));
if(menu) menu.addEventListener('click',()=>setMenu(!menuOpen));
const panelClose=header.querySelector('.yaara-panel-close');
if(panelClose) panelClose.addEventListener('click',()=>setAudience(false,true));
if(backdrop) backdrop.addEventListener('click',()=>setAudience(false,true));
header.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{setAudience(false);setMenu(false);}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(audienceOpen){e.preventDefault();setAudience(false,true);}else if(menuOpen){e.preventDefault();setMenu(false,true);}}if(e.key==='Tab'&&menuOpen&&mobile.matches){const focusable=[...header.querySelectorAll('a,button')].filter(el=>el.getClientRects().length&&!el.closest('[hidden]'));const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
document.addEventListener('pointerdown',e=>{if(audienceOpen&&!header.contains(e.target)&&(!backdrop||!backdrop.contains(e.target)))setAudience(false);});
document.addEventListener('focusin',e=>{if(audienceOpen&&!mobile.matches&&!header.contains(e.target))setAudience(false);});
mobile.addEventListener('change',()=>{setMenu(false);setAudience(false);});
addEventListener('pageshow',()=>{setMenu(false);setAudience(false);});
})();
