/** Numeros impares del 100 al 1 excepto los multiplos de 3 y 7 */
let contador = 0;

/** Estructura while */
contador = 100;
console.log('Estruectura While()');
while (contador > 0) {
    if (contador % 2 == 0) {
        // son pares
    } else if (contador % 3 == 0) {
        // son multiplos de 3
    } else if (contador % 7 == 0) {
        // son multiplos de 7
    } else {
        console.log(contador);
    }
    contador--;
}


/** Estructura Do while */
contador = 100;
console.log('Estruectura Do While()');
do {
    if (contador % 2 == 0) {
        // son pares
    } else if (contador % 3 == 0) {
        // son multiplos de 3
    } else if (contador % 7 == 0) {
        // son multiplos de 7
    } else {
        console.log(contador);
    }
    contador--;
} while( contador>0);


/** Estructura for */
console.log('Estruectura for');
for(contador=100; contador>0;contador--){
    if (contador % 2 == 0) {
        // son pares
    } else if (contador % 3 == 0) {
        // son multiplos de 3
    } else if (contador % 7 == 0) {
        // son multiplos de 7
    } else {
        console.log(contador);
    }
}






