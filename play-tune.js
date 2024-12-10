document.querySelectorAll(".music-div").forEach(musicDiv => {
    musicDiv.addEventListener("click", function () {
        // Remove the 'music-div-click' class from all elements
        document.querySelectorAll(".music-div").forEach(div => {
            div.classList.remove("music-div-click");
        });

        // Add the 'music-div-click' class to the clicked element
        this.classList.add("music-div-click");

        // Get the audio file path from the 'data-music' attribute
        let musicPath = this.getAttribute("data-music");

        // Create a new Audio object and play the audio
        let audio = new Audio(musicPath);
        audio.play();
    });
});
