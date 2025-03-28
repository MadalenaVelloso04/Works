window.onload = function() {
    const drawing = document.getElementById('interactiveDrawing');
    const aboutMe = document.getElementById('aboutMe');

    drawing.addEventListener('mouseenter', () => {
        moveRandomly();
    });

    function moveRandomly() {
        const maxMovement = 300;  // Adjust this for bigger movements
        const randomX = (Math.random() - 0.5) * maxMovement * 2; // Random value between -maxMovement and +maxMovement
        const randomY = (Math.random() - 0.5) * maxMovement * 2; // Random value between -maxMovement and +maxMovement

        drawing.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Function to slide down to the "About Me" section
    function slideDownToAboutMe() {
        drawing.style.position = 'fixed';
        drawing.style.top = '30px';
        drawing.style.right = '30px';
        drawing.style.bottom = '30px';
        drawing.style.transform = 'none'; // Reset any previous transform
    }

    // Trigger the slide down when the "About Me" section is clicked
    aboutMe.addEventListener('click', () => {
        slideDownToAboutMe();
    });

    // Trigger the slide down when the "About Me" section is scrolled into view
    window.addEventListener('scroll', () => {
        const aboutMeTop = aboutMe.getBoundingClientRect().top;
        if (aboutMeTop <= window.innerHeight && aboutMeTop >= 0) {
            slideDownToAboutMe();
        }
    });
};
