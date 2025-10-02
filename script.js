<script>
  const playButton = document.getElementById('playButton');
  const gameFrame = document.getElementById('gameFrame');
  const gameUrl = "https://https://www.hoodamath.com/games/snowrider3d.html"; // Replace with the actual URL from GameDistribution

  playButton.addEventListener('click', () => {
    gameFrame.src = gameUrl;
    gameFrame.style.display = 'block';
    playButton.style.display = 'none'; // Optionally hide the button after clicking
  });
</script>
