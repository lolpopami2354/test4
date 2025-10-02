// script.js
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const gameFrame = document.getElementById('gameFrame');
    const gameUrl = "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/"; // Replace with the actual game URL

    playButton.addEventListener('click', function() {
        // Set the iframe's src to the game URL
        gameFrame.src = gameUrl;
        // Make the iframe visible
        gameFrame.classList.add('visible');
        // Optional: Hide the button after it's clicked
        playButton.style.display = 'none';
    });
});
