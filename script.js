document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');

        // Randomize the heart symbol (different shades/styles)
        const hearts = ['❤️', '💖', '💗', '💓', '💞'];
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

        // Randomize starting position
        heart.style.left = Math.random() * 100 + 'vw';

        // Randomize animation duration between 3s and 6s
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';

        // Add the heart to the container
        container.appendChild(heart);

        // Remove the heart after it floats up to prevent DOM overload
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Create a new heart every 300ms
    setInterval(createHeart, 300);
});
