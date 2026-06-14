// Auto‑update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
}

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Save preference
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
