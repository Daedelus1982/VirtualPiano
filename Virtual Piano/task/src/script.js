const keyArray =['A', 'S', 'D', 'F', 'G', 'H', 'J'];

document.addEventListener("keydown", function (event) {
    const letter = event.code.charAt(event.code.length - 1);
    if (keyArray.includes(letter)) {
        console.log(`The '${letter}' key is pressed.`)
    } else {
        console.log("Warning: that key is not recognised.")
    }
});