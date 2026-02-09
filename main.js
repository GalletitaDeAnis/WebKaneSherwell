const animatedSections = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 80}ms`;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedSections.forEach((section) => observer.observe(section));

const tabs = document.querySelectorAll(".tab");
const frames = document.querySelectorAll(".frame__media");

const workContent = {
  Mentored: ["Legacy Site Screenshot", "Redesigned Experience"],
  Shippit: ["Old Shipping Portal", "Unified Logistics Dashboard"],
  "Carter Grange": ["Limited Catalog", "Premium E-commerce"],
  "Sunbeam Foods": ["Outdated Brand Site", "Fresh Consumer Hub"],
  "Trident Foods": ["Static Product Pages", "Story-driven Experience"],
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("tab--active"));
    tab.classList.add("tab--active");
    const label = tab.textContent.trim();
    const [beforeText, afterText] = workContent[label] || workContent.Mentored;
    frames[0].textContent = beforeText;
    frames[1].textContent = afterText;
  });
});
