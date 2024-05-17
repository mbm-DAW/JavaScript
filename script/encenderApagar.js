let bombilla = document.querySelector("#bombilla");
let encendida = false;
bombilla.addEventListener("click", function () {
    if (encendida) {
        bombilla.src = "img/bombilla-off.gif";
        encendida = false;
    }
    else {
        bombilla.src = "img/bombilla-on.gif";
        encendida = true;

    }

});
