const audioPlayer = document.querySelector(".ap");
const audio = new Audio("https://fi.zophar.net/soundfiles/nintendo-snes-spc/chrono-trigger/303%20At%20the%20Bottom%20of%20Night.mp3");

console.dir(audio);audio.addEventListener("loadeddata",() =>{audioPlayer.querySelector(".time .le").textContent = getTimeCodeFromNum(audio.duration);audio.volume = .75;},false);const timeline = audioPlayer.querySelector(".tl");timeline.addEventListener("click",e =>{const timelineWidth = window.getComputedStyle(timeline).width;const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;audio.currentTime = timeToSeek;},false);setInterval(() =>{const progressBar = audioPlayer.querySelector(".prog");progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";audioPlayer.querySelector(".time .cur").textContent = getTimeCodeFromNum(audio.currentTime);},500);const playBtn = audioPlayer.querySelector(".ctrl .t-play");playBtn.addEventListener("click",() =>{if (audio.paused){playBtn.classList.remove("play");playBtn.classList.add("pause");audio.play();} else{playBtn.classList.remove("pause");playBtn.classList.add("play");audio.pause();}},false);function getTimeCodeFromNum(num){let seconds = parseInt(num);let minutes = parseInt(seconds / 60);seconds -= minutes * 60;const hours = parseInt(minutes / 60);minutes -= hours * 60;if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2,0)}`;return `${String(hours).padStart(2,0)}:${minutes}:${String(seconds % 60).padStart(2,0)}`}
