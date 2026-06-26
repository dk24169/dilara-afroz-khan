document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".tab-btn").forEach((btn) => {
 btn.addEventListener("click", () => {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const filter = btn.dataset.tab;
  document.querySelectorAll(".portfolio-card").forEach((card) => {
   const type = card.dataset.type || "";
   card.style.display = filter === "all" || type.includes(filter) ? "" : "none";
  });
 });
});
