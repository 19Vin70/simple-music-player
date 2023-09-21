const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const volumeControl = document.getElementById("volume");

playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerText = "Pause";
    } else {
        audio.pause();
        playPauseButton.innerText = "Play";
    }
});

volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
});

audio.addEventListener("ended", function () {
    playPauseButton.innerText = "Play";
});
