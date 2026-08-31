document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.getElementById('hearts-container');
    const welcomeContainer = document.getElementById('welcome-container');
    const messageContainer = document.getElementById('message-container');
    const revealButton = document.getElementById('reveal-button');
    let heartInterval;

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
        heartsContainer.appendChild(heart);

        // Remove the heart after it floats up to prevent DOM overload
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    revealButton.addEventListener('click', () => {
        // Hide welcome screen
        welcomeContainer.classList.add('hidden');

        // After a short delay, show the message screen and start hearts
        setTimeout(() => {
            messageContainer.classList.remove('hidden');

            // Start heart animation
            if (!heartInterval) {
                heartInterval = setInterval(createHeart, 300);
            }
        }, 500); // Wait half a second for the fade out to finish
    });
});
