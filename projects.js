
function showCategory(id) {
  const allCategories = document.querySelectorAll('.project-category');
  const allFolders = document.querySelectorAll('.folder');

  allCategories.forEach(cat => cat.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  allFolders.forEach(folder => {
    folder.classList.remove('active-folder');
    if (folder.dataset.folder === id) {
      folder.classList.add('active-folder');
    }
  });
}

// Automatically open Posters on page load
document.addEventListener("DOMContentLoaded", () => {
  showCategory('Posters');
});

function openModal(src) {
  document.getElementById('modalImage').src = src;
  document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('imageModal').classList.add('hidden');
}



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});


window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax-text').forEach(el => {
    const speed = 0.3; // Adjust for more/less movement
    const offset = window.scrollY * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
});

document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));
