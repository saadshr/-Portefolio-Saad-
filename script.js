/* script.js */
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => document.body.classList.toggle("light");

const faders = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
