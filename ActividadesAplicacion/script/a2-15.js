/** CALCULAR EL FACTORIAL DE U8N NUMERO
 * 
 */
let numero;
do {
    numero = Number(prompt("Digite un numero (entre 1 y 100) para calcular el factorial"));
} while (!(numero > 0 && numero <= 100));



// version inversa descendente
// FORMULA: n!=n*(n-1)!
console.log('formula descendente:')
let factorial = numero;
for (contador = numero; contador > 1; contador--) {
    factorial = factorial *(contador-1);
    console.log(contador, factorial);
}
alert("Factorial de " + numero + " es " + factorial);


// version ascendente
// FORMULA: n!=1x2x3x4 ... xn
console.log('formula ascendente:')
factorial=1;
for(contador=1;contador<=numero;contador++){
    factorial=factorial*contador;
    console.log(contador,factorial);
}
alert("Factorial de " + numero + " es " + factorial);

