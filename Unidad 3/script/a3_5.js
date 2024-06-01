/** Crea un array de 10 elementos */
let datos = new Array(10);

/** Inicializa el array con con multiplos aleatorios de 5 */
let contador = 0;
do {
    let valor = Math.floor(Math.random() * 100 + 1);
    if (valor % 5) {
        datos[contador] = valor;
        contador++;
    }
} while (contador < 10);
console.log(datos+' Array original aleatorio');
let original=datos.slice();

/** Si el primer elemento es menor de 50 debes eliminarlo e insertar otro multiplo de 5 aleatorio hasta que sea mayor o igual a 50 */
while (datos[0] < 50) {
    let eliminado=datos.shift();
    let valor = 0;
    do {
        valor = Math.floor(Math.random() * 100 + 1);
    } while (!(valor % 5));
    datos.unshift(valor);
    console.log(datos + ' <<<<<<CAMBIO '+eliminado+ ' por '+valor);
}
let comprobacion1=datos.slice();

/** Si el ultimo elemento es mayor de 50, debes eliminarlo e insertar otro multiplo de 5 aleatorio  que sea mayor o igual que 50 */
while (datos[datos.length - 1] > 50) {
    let eliminado=datos.pop();
    let valor = 0;
    do {
        valor = Math.floor(Math.random() * 100 + 1);
    } while (!(valor % 5));
    datos.push(valor);
    console.log(datos + ' >>>>>>CAMBIO '+eliminado+ ' por '+valor);
}
let comprobacion2=datos.slice();

/** Muestra resultados */
console.log(original,' Original');
console.log(comprobacion1,' Tras Comprobacion 1');
console.log(comprobacion2,' Tras Comprobacion 2');
