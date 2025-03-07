document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 1;
  const screens = document.querySelectorAll(".screen");

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchend", handleTouchEnd, false);

  let startY = 0;

  function handleTouchStart(event) {
      startY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
      let endY = event.changedTouches[0].clientY;
      let diffY = startY - endY;

      if (diffY > 50 && currentScreen === 1) {
          showScreen(2);
      } else if (diffY < -50 && currentScreen === 2) {
          showScreen(1);
      }
  }

  function showScreen(screenNumber) {
      if (screenNumber === 2) {
          screens[0].style.transform = "translateY(-100vh)";
          screens[1].style.transform = "translateY(0)";
      } else {
          screens[0].style.transform = "translateY(0)";
          screens[1].style.transform = "translateY(100vh)";
      }
      currentScreen = screenNumber;
  }

  // 🎵 Music Player Functionality with Material Icons
  const music = document.getElementById("bgMusic");
  const playPauseButton = document.getElementById("playPauseButton");
  const playIcon = "play_circle_outline";
  const pauseIcon = "pause_circle_outline";
  
  let isPlaying = false;

  playPauseButton.addEventListener("click", function () {
      if (isPlaying) {
          music.pause();
          playPauseButton.innerHTML = `<i class="material-icons">${playIcon}</i>`;
      } else {
          music.play();
          playPauseButton.innerHTML = `<i class="material-icons">${pauseIcon}</i>`;
      }
      isPlaying = !isPlaying;
  });
});
