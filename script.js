(() => {
 const menu = document.querySelector('.menu-toggle');
 const nav = document.querySelector('.site-nav');
 const close = () => { nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation'); };
 menu?.addEventListener('click',()=>{ const open=nav?.classList.toggle('open'); menu.setAttribute('aria-expanded',String(!!open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation'); });
 nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close()});
 document.addEventListener('click',ev=>{if(!ev.target.closest('.nav-inner'))close()});
 document.querySelector('#current-year').textContent=String(new Date().getFullYear());
 const video=document.querySelector('.video-wrap video');
 if(video){video.addEventListener('error',()=>{video.setAttribute('aria-label','Demonstration video could not be played');},true)}
})();