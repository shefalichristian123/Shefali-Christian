const menu=document.querySelector(".hamburger"),nav=document.querySelector(".nav nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
window.addEventListener("scroll",()=>{let y=scrollY+120;document.querySelectorAll("section[id]").forEach(s=>{let a=document.querySelector('.nav nav a[href="#'+s.id+'"]');if(a&&y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight){document.querySelectorAll(".nav nav a").forEach(n=>n.classList.remove("active"));a.classList.add("active")}})});
