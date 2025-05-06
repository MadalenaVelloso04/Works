// Function to check if the element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class to elements when they are in the viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible'); // Add visible class when element is in view
        }
        // No removal of visible class
    });
}

// Attach scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Initial check to add animations if elements are in the viewport
document.addEventListener('DOMContentLoaded', animateOnScroll);
