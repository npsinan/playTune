document.querySelectorAll(".music-div").forEach(musicDiv => {
    musicDiv.addEventListener("click", function () {
    
        document.querySelectorAll(".music-div").forEach(div => {
            div.classList.remove("music-div-click");
        });

      
        this.classList.add("music-div-click");

        
        let musicPath = this.getAttribute("data-music");

      
        let audio = new Audio(musicPath);
        audio.play();
    });
});
