const sounds = ["aaplause", "boo", "gasp"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
      stopSongs();
      document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    if (song) {
      // Check if the audio element exists
      song.pause();
      song.currentTime = 0;
    }
  });
}
