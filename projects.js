
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
