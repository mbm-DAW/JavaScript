/** Crea un array de 10 elementos */
let datos = new Array(10);

/** Inicializa el array con con multiplos aleatorios de 5 */

for (i = 0; i < 10; i++) {
    datos[i] = parseInt(Math.random() * 21) * 5;
}
original = datos.slice();
console.log('Original: ' + original);


/** Si el primer elemento es menor de 50 debes eliminarlo e insertar otro multiplo de 5 aleatorio hasta que sea mayor o igual a 50 */
let valor = datos[0];
if (valor < 50) {
    let eliminado = datos.shift(); // elimina al principio
    do {
        valor = parseInt(Math.random() * 21) * 5;
    } while (valor < 50);
    datos.unshift(valor);
    console.log(' <<<<<<<CAMBIO<<<<<<<< ' + eliminado + ' por ' + valor);
}

/** Si el ultimo elemento es mayor de 50 debes eliminarlo e insertar otro multiplo de 5 aleatorio hasta que sea menor o igual de 50  */
valor=datos[datos.length-1];
if (valor > 50) {
    let eliminado = datos.pop(); // elimina al final
    do {
        valor = parseInt(Math.random() * 21) * 5;
    } while (valor > 50);
    datos.push(valor);
    console.log(' >>>>>>>CAMBIO>>>>>>>> ' + eliminado + ' por ' + valor);
}
console.log('Cambiado: ',datos)



