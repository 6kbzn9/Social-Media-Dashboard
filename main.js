const toggle = document.querySelector("#toggle");
const doc = document.documentElement;

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dark");
  if (doc.getAttribute("data-theme") === "dark") {
    doc.setAttribute("data-theme", "light");
  } else {
    doc.setAttribute("data-theme", "dark");
  }
});
