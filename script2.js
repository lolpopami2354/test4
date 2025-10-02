document.addEventListener('DOMContentLoaded', function() {
    const mincraft = document.getElementById('micraft');
    const gameFrame = document.getElementById('gameFrame');
    const gameUrl = "https://daniezonmc.github.io/1.20/"; // Replace with the actual game URL

    playButton.addEventListener('click', function() {
        // Set the iframe's src to the game URL
        gameFrame.src = gameUrl;
        // Make the iframe visible
        gameFrame.classList.add('visible');
        // Optional: Hide the button after it's clicked
        playButton.style.display = 'none';
    });
});
