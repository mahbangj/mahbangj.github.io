(() => {
 const menu = document.querySelector('.menu-toggle');
 const nav = document.querySelector('.site-nav');
 const close = () => { nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation'); };
 menu?.addEventListener('click',()=>{ const open=nav?.classList.toggle('open'); menu.setAttribute('aria-expanded',String(!!open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation'); });
 nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close()});
 document.addEventListener('click',ev=>{if(!ev.target.closest('.nav-inner'))close()});
 document.querySelector('#current-year').textContent=String(new Date().getFullYear());
 const backToTop=document.querySelector('[data-back-to-top]');
 backToTop?.addEventListener('click',(event)=>{
   event.preventDefault();
   close();
   const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   window.scrollTo({top:0,left:0,behavior:reducedMotion?'instant':'smooth'});
   if(window.location.hash) history.replaceState(null,'',window.location.pathname+window.location.search);
 });
 const video=document.querySelector('.video-wrap video');
 if(video){video.addEventListener('error',()=>{video.setAttribute('aria-label','Demonstration video could not be played');},true)}
})();