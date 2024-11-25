let key = "";

window.addEventListener("keydown", keydown);

function keydown(e) {
  console.log(key);
  if (typeof key !== "string") {
    key.classList.remove("keyActive");
  }

  let strDataAudio = '[data-audio="' + e.keyCode + '"]';
  const audio = document.querySelector(strDataAudio);
  if (!audio) return;
  audio.currentTime = 0; //Звук перемотка на початок
  audio.play();

  let strDataKey = '[data-key="' + e.keyCode + '"]';
  key = document.querySelector(strDataKey);
  if (!key) return;
  key.classList.add("keyActive");
}
