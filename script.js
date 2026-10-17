// Mobile menu + dropdown
const burger=document.getElementById('burger'),links=document.getElementById('navLinks');
burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
document.querySelector('.drop-btn').addEventListener('click',e=>{e.currentTarget.parentElement.classList.toggle('open')});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

// Product tabs filter
const tabs=document.querySelectorAll('.tab'),cards=document.querySelectorAll('.card');
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');
  cards.forEach(c=>c.classList.toggle('hide',t.dataset.filter!=='all'&&c.dataset.cat!==t.dataset.filter));
}));

// Slider arrows
const slider=document.getElementById('slider');
document.getElementById('next').onclick=()=>slider.scrollBy({left:260});
document.getElementById('prev').onclick=()=>slider.scrollBy({left:-260});

// Modal
const modal=document.getElementById('modal');
document.querySelectorAll('.open-modal').forEach(b=>b.addEventListener('click',()=>modal.hidden=false));
document.getElementById('closeModal').onclick=()=>modal.hidden=true;
modal.addEventListener('click',e=>{if(e.target===modal)modal.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.hidden=true});

// Newsletter
document.getElementById('newsForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('newsMsg').textContent='You are on the list. Watch your inbox for the next drop.';
  e.target.reset();
});

// Stats counter
const counters=document.querySelectorAll('[data-count]');
const io=new IntersectionObserver(entries=>entries.forEach(en=>{
  if(!en.isIntersecting)return;
  const el=en.target,end=+el.dataset.count;let n=0;const step=Math.ceil(end/60);
  const t=setInterval(()=>{n=Math.min(n+step,end);el.textContent=n.toLocaleString();if(n===end)clearInterval(t)},25);
  io.unobserve(el);
}),{threshold:.5});
counters.forEach(c=>io.observe(c));
