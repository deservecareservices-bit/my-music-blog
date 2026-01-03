// Simple JS starter file

console.log("Music Blog loaded!");

// Example: highlight the current page link in navigation
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
  if(link.getAttribute("href") === currentPage) {
    link.style.color = "#ff6600"; // highlight color
  }
});
