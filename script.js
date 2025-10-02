<script>
  const playButton = document.getElementById('playButton');
  const gameFrame = document.getElementById('gameFrame');
  const gameUrl = "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/?gd_sdk_referrer_url=https://www.example.com/games"; // Replace with the actual URL from GameDistribution

  playButton.addEventListener('click', () => {
    gameFrame.src = gameUrl;
    gameFrame.style.display = 'block';
    playButton.style.display = 'none'; // Optionally hide the button after clicking
  });
</script>
