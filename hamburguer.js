  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
      console.log("Hamburger clicked!");
      navLinks.classList.toggle("show");
    });
  });

