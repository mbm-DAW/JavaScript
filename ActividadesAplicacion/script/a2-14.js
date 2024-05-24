let numeroDNI=Number(prompt("Introduce tu numero de DNI sin letra"));

let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
let posicion = numeroDNI % (cadena.length - 1);
alert("Tu numero DNI con Letra: "+numeroDNI+cadena[posicion]);
