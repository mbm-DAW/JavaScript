let myArray1 = [1, 2, 3, 4, 9, 8, 7, 6, 5,'pepe'];
let myArray2 = [1, 2, 3,'pepe', 4, 5, 6, 7, 8, 9];
/** convertimos los arrays en conjuntos */
let myConjunto1 = new Set(myArray1);
let myConjunto2 = new Set(myArray2);
let mismosElementos = null;

if (myConjunto1.size == myConjunto2.size) {  // comprueba que tengan el mismo numero de elementos

    for (let item of myConjunto1) { // comprueba que todos los elementos del conjunto uno se encuentren en el conjunto dos.
        if (myConjunto2.has(item)) {
            // encontrado, continua hasta el final
        } else {
            mismosElementos = false;
            break;
        }
    }

    if (mismosElementos == null)
        mismosElementos = true;
}

if (mismosElementos == true)
    console.log('CONTIENEN LOS MISMOS ELEMENTOS');
else
    console.log('NO CONTIENEN LOS MISMOS ELEMENTOS');


