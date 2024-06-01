let numeros = new Array(100);

/** Relleno de numeros aleatorios de 1 a 10.000*/
for (i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 1000 + 1);
}
console.log(numeros);

console.log('Numeros pares:');
for (i = 0; i < 10; i++) {
    if (!(numeros[i] % 2))
        console.log(numeros[i]);
}

/** Version for ( in ) */
console.log('Numeros pares /Version for in ..:');
for (item in numeros) {
    if (!(numeros[item] % 2))
        console.log(numeros[item]);

}

/** Version for ( of ) */
console.log("Numeros pares /Version for of ...:");
for (item of numeros){
    if (!(item%2))
        console.log(item);
}