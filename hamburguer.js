document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navLinkItems = navLinks.querySelectorAll("a[href^='#']");

  if (menuToggle && navLinks) {
    // Toggle menu open/close
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("open");
    });

    // Auto-close on internal link click
    navLinkItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("open");
      });
    });
  }
});
