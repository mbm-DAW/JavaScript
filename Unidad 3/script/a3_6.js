let items = [true,false, false, true, false, false, true, false, true, true];
let posicion = 0;
do {
    posicion = items.indexOf(true, posicion);
    if (posicion != -1) { // encontrado
        console.log('Posicion: ' + posicion);
        posicion++;
    }
} while (posicion != -1);

