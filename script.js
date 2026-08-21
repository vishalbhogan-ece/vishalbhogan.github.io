const progress=document.getElementById('progress');const nav=document.getElementById('navLinks');const menu=document.getElementById('menu');const theme=document.getElementById('theme');const glow=document.getElementById('cursorGlow');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?scrollY/h*100:0)+'%'});
menu?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const saved=localStorage.getItem('portfolio-theme');if(saved==='dark'){document.body.classList.add('dark');theme.textContent='☾'}else{theme.textContent='☼'}
theme?.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');theme.textContent=dark?'☾':'☼';localStorage.setItem('portfolio-theme',dark?'dark':'light')});
if(glow){window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.section,.project,.skill-card,.timeline-item,.cert,.education-card').forEach(el=>observer.observe(el));
