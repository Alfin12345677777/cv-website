// ============================================================
// scroll reveal — show sections as they come into view
// ============================================================
const sections = document.querySelectorAll('.section');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

sections.forEach((s) => io.observe(s));

// ============================================================
// last-updated stamp — auto-fills with current month
// ============================================================
(() => {
  const el = document.getElementById('last-updated');
  if (!el) return;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const d = new Date();
  el.textContent = `${months[d.getMonth()]} ${d.getFullYear()}`;
})();

// ============================================================
// active nav highlight on scroll (subtle)
// ============================================================
const navAnchors = document.querySelectorAll('.navlinks a');
const sectionIds = ['research', 'publications', 'projects', 'experience', 'contact'];
const targets = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

const navIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        if (a.getAttribute('href') === `#${id}`) {
          a.style.color = 'var(--accent)';
        } else {
          a.style.color = '';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

targets.forEach((t) => navIO.observe(t));
