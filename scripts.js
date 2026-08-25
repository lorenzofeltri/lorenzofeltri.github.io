const button = document.getElementById("magicButton");
const message = document.getElementById("message");

let clicks = 0;

button.addEventListener("click", function () {

    clicks++;

    message.textContent =
        `Hai cliccato il pulsante ${clicks} ${clicks === 1 ? "volta" : "volte"}! 🚀`;

});
