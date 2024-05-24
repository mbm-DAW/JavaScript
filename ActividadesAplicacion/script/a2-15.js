
let numero;
do {
    numero = Number(prompt("Digite un numero (entre 1 y 100) para calcular el factorial"));
} while (!(numero > 0 && numero <= 100));

let factorial=1;

for (let i = numero; i >= 1; i--) {
  factorial = factorial+(factorial*i);
    console.log(i,factorial);
}

alert("Factorial de " + numero + " es " + factorial);