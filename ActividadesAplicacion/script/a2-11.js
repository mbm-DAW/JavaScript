let variable1 = 1;
var variable2 = 2;
const variable3 = 3;

console.log("Variables gobales");
console.log(variable1);
console.log(variable2);
console.log(variable3);

while (true) {
    console.log("Variables gobales UTILIZADAS dentro bucle");
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);



    variable1 = 11;//let variable1 = 11 NO SE PUEDE VOLVER A DEFINIR
    var variable2 = 12; // ES DISTINTA A LA QUE ESTA FUERA DEL BUCLE
    // variable3 = 13; NO SE PUEDE VOLVER A INICIALIZAR PORQUE ES UNA CONSTANTE
    console.log("Variables locales DESPUES DE INICIALIZAR EN EL BUCLE");
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);


    /**  definidas en el bloque */
    let variableb1 = 100;
    var variableb2 = 200;
    const variableb3 = 300;

    break;
}

console.log("Variables definidas en el bloque y mostradas a nivel global");

//console.log(variableb1); // NO SE RECONOCE
console.log(variableb2);
//console.log(variableb3); // NO SE RECONOCE


