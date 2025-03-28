document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('.new-section');
    const insideBars = document.querySelectorAll('.inside1, .inside2, .inside3, .inside4, .inside5, .inside6, .inside7, .inside8, .inside9');

    // Function to check if any part of the section is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        if (isElementInViewport(section)) {
            insideBars.forEach(bar => {
                bar.classList.add('animate');
            });
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

