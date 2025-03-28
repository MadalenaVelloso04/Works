window.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('#scroll-container');
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    cards.forEach(card => {
        // Generate random positions within the container's width and height
        const randomX = Math.random() * (containerWidth - 200); // 200 is the width of the card
        const randomY = Math.random() * (containerHeight - 300); // 300 is the height of the card

        // Apply the random positions
        card.style.left = `${randomX}px`;
        card.style.top = `${randomY}px`;

        // Fade in the card
        setTimeout(() => {
            card.style.opacity = 1;
        }, 100);
    });
});
