let numeroSecreto = parseInt(Math.random() * 100 + 1);
let numeroUsuario = 0;
let intentos=0;
let continuar = true;
let acertaste = false;
console.log(numeroSecreto);

/** Aqui siempre es mejor utilizar la estructura D0 While por por lo menos ha de entrar en el bucle una vez */
do {
    numeroUsuario = prompt("Digite el numero secreto: ");

    if (numeroUsuario == null) {
        continuar = false;
    }
    else if (!isNaN(numeroUsuario) && numeroUsuario > 0 && numeroUsuario < 101) {
        numeroUsuario = Number(numeroUsuario);
        intentos++;
        // comprueba numero
        if (numeroUsuario > numeroSecreto) {
            alert("Es menor");
        }
        else if (numeroUsuario < numeroSecreto) {
            alert('Es mayor');
        }
        else {
            continuar = false;
            acertaste = true;
        }
    }
    else {
        alert('Ha de introducir un numero valido entre 1 y 100');
    }
} while (continuar);


if (acertaste) {
    alert('Muy bien acertaste el numero buscado es el ' + numeroUsuario + ' y has utilizado '+intentos+' intentos');
}
else {
    alert('Cancelaste');
}