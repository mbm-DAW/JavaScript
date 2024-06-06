/** Crea un array de 100 elementos del uno al diez */
let nElementos=100;
let myArray = Array();
for (i = 0; i < nElementos; i++) {
    myArray[i] = Math.floor(Math.random() * 10 + 1);
}
console.log('Array original', myArray);

/** Comprueba el valor de los elementos y graba su posicion y sucesivas en un array utilizando un Mapa */
let myMapa = new Map();
for (i = 0; i < nElementos; i++) {
    let posiciones = new Array();
    posiciones[0] = i; // primera vez encontrado
    if (myMapa.has(myArray[i])) { //siguientes veces encontrado
        posiciones = myMapa.get(myArray[i]);
        posiciones.push(i);
    }
    myMapa.set(myArray[i], posiciones);
}
//console.log(myMapa);
// /** Elimina las claves que solo estan en una posicion , osea que no se repiten */
let myMapa2= new Map(myMapa);
for(let [key,pos] of myMapa2){
    if(pos.length==1)
        myMapa2.delete(key);
    else
    console.log('El valor '+key+' esta en las siguientes posiciones '+pos);
}
//console.log('Elementos repetidos y sus posiciones', myMapa2);