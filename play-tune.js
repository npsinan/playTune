const musicDivs = document.querySelectorAll(".music-div");

// Add click functionality
musicDivs.forEach(musicDiv => {
    musicDiv.addEventListener("click", function () {
        playMusic(this);
    });
});

// Add keydown functionality
document.addEventListener("keydown", function (event) {
    const typedLetter = event.key.toUpperCase(); // Get the typed letter (case-insensitive)
    
    musicDivs.forEach(musicDiv => {
        const letter = musicDiv.querySelector(".para").textContent.trim().toUpperCase();
        if (letter === typedLetter) {
            playMusic(musicDiv);
        }
    });
});


function playMusic(musicDiv) {
   
    musicDivs.forEach(div => {
        div.classList.remove("music-div-click");
    });

   
    musicDiv.classList.add("music-div-click");

    
    const musicPath = musicDiv.getAttribute("data-music");

    
    const audio = new Audio(musicPath);
    audio.play();
}
