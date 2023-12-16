const keyArray = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];

document.addEventListener("keydown", function (event) {
    const letter = event.code.charAt(event.code.length - 1);
    if (keyArray.includes(letter)) {
        let audio = new Audio(`${letter}.mp3`)
        audio.play();
    } else {
        console.log("Warning: that key is not recognised.")
    }
});