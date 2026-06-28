// Typewriter effect for the role line
const roleText = "CS Student · Flutter Developer · Cybersecurity Enthusiast";
const typedEl = document.getElementById('typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  typedEl.textContent = roleText;
} else {
  let i = 0;
  function type(){
    if (i <= roleText.length){
      typedEl.textContent = roleText.slice(0, i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('[data-nav]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));
