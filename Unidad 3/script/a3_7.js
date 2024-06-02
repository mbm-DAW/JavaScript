let array1=[12,12,12,14];
let array2=[11,11,13,15];
let array3=['i','j','k','l'];

/** Asignacion de arrays */
let myConjunto = new Set([array1,array2,array3]);
console.log(myConjunto);

/** Asignacion de conjuntos */
let myConjunto2 = new Set([...array1,...array2,...array3]);
console.log(myConjunto2);
/** Muestra cada uno de sus elementos */
for(let item of myConjunto2){
    console.log(item);
}
