let numeroUser;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let acertado = false;
while (!acertado) {
    numeroUser = Number(prompt("Indica el numero: "));
    if (numeroSecreto < numeroUser) {
        alert("El numero deber ser menor");
    }
    else if (numeroSecreto > numeroUser) {
        alert("El numero deber ser mayor");
    }
    else if (numeroSecreto == numeroUser) {
        alert("Has acertado");
        acertado = true;
    }
    else {
        alert("No has escrito un numero");
    }
}

