const progress=document.getElementById('progress');const nav=document.getElementById('navLinks');const menu=document.getElementById('menu');const theme=document.getElementById('theme');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?scrollY/h*100:0)+'%'});
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const saved=localStorage.getItem('portfolio-theme');if(saved==='light'){document.body.classList.add('light');theme.textContent='☀'}
theme?.addEventListener('click',()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');theme.textContent=light?'☀':'☾';localStorage.setItem('portfolio-theme',light?'light':'dark')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.style.animation='up .65s both'}),{threshold:.08});document.querySelectorAll('.section,.project,.skill-card,.timeline-item,.education-card').forEach(el=>observer.observe(el));
