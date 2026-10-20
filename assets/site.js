// Set your WhatsApp number once here (country code, no + or spaces).
// TODO before going live: this is still a placeholder.
const WHATSAPP = "92XXXXXXXXXX";

document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.dataset.wa);
  a.target = "_blank"; a.rel = "noopener";
});

// Fade sections in as they scroll into view.
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Mobile menu.
const menuBtn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
if (menuBtn && menu) {
  const set = open => { menu.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); };
  menuBtn.addEventListener("click", () => set(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
}
