// ============================================
// SAAD SAHRAOUI — PORTFOLIO GODMODE JS
// ============================================

// --- CUSTOM CURSOR ---
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// --- NAVBAR SCROLL ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// --- SMOOTH ACTIVE LINKS ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// --- INTERSECTION OBSERVER — skill bars + fade-in ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));

// Fade-in for project cards
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.proj-card, .skill-card, .stat, .tag-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// --- TYPEWRITER for hero subtitle ---
const subtitles = [
  'Ingénieur IA & Data Science',
  'Machine Learning Engineer',
  'Data Analyst',
  'Problem Solver'
];
const subEl = document.querySelector('.hero-sub');
if (subEl) {
  let si = 0, ci = 0, deleting = false;
  function typeWriter() {
    const current = subtitles[si];
    if (!deleting) {
      subEl.textContent = current.slice(0, ci++);
      if (ci > current.length) { deleting = true; setTimeout(typeWriter, 1800); return; }
    } else {
      subEl.textContent = current.slice(0, ci--);
      if (ci < 0) { deleting = false; si = (si + 1) % subtitles.length; ci = 0; }
    }
    setTimeout(typeWriter, deleting ? 50 : 80);
  }
  setTimeout(typeWriter, 1500);
}

// --- TILT effect on project cards ---
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-5px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    card.style.perspective = '800px';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});

// --- GLITCH effect on logo click ---
document.querySelector('.nav-logo').addEventListener('click', () => {
  const logo = document.querySelector('.nav-logo');
  logo.style.animation = 'none';
  logo.style.color = 'var(--accent)';
  setTimeout(() => logo.style.color = '', 400);
});

console.log('%c👋 Salut recruteur ! Code source sur github.com/saadshr', 
  'background:#4FFFB0; color:#000; padding:8px 16px; font-family:monospace; border-radius:4px;');