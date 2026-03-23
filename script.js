const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = [...document.querySelectorAll(".nav a")];
const revealItems = [...document.querySelectorAll(".reveal")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
  revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isMatch);
      });
    });
  },
  {
    threshold: 0.45,
    rootMargin: "-20% 0px -30% 0px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));
