const musicDivs = document.querySelectorAll(".music-div");


const audioFiles = {};
musicDivs.forEach(div => {
    const path = div.getAttribute("data-music");
    audioFiles[path] = new Audio(path);
});


musicDivs.forEach(musicDiv => {
    musicDiv.addEventListener("click", function () {
        playMusic(this);
    });
});


document.addEventListener("keydown", function (event) {
    const typedLetter = event.key.toUpperCase(); 
    
    musicDivs.forEach(musicDiv => {
        const letter = musicDiv.querySelector(".para").textContent.trim().toUpperCase();
        if (letter === typedLetter) {
            playMusic(musicDiv);
        }
    });
});


function playMusic(musicDiv) {
    
    musicDivs.forEach(div => div.classList.remove("music-div-click"));


    musicDiv.classList.add("music-div-click");

    
    const musicPath = musicDiv.getAttribute("data-music");


    const audio = audioFiles[musicPath];
    if (audio) {
        audio.currentTime = 0; 
        audio.play();
    }
}
