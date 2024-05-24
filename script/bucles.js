// let pases = 0;
// // while

// while (pases < 10) {
//     console.log("Numero de pases " + pases);
//     pases++;
// }

// // Mostrar la tabla de multiplicar
// /* con while */
// let x = 1;
// let y = 1;
// while (x < 10) {
//     y = 1;
//     while (y < 10) {
//         console.log(x + "x" + y + "=" + (x * y));
//         y++;
//     }
//     x++;
// }

// /** con bucle for */
// for(x=1;x<10;x++){
//     for(y=1;y<10;y++){
//         console.log(x + "x" + y + "=" + (x * y));
//     }
// }


// // Random

// let abecedario = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

// let numeroAleatorio = parseInt(Math.random() * 26);
// console.log(abecedario[numeroAleatorio]);
// let letra = "";
// /** con while */
// while (letra != abecedario[numeroAleatorio]) {
//     letra = prompt("Indica una letra").toUpperCase();
// }
// alert("Adivinaste .. es la letra " + abecedario[numeroAleatorio]);


// /*** con do while */
// do {
//     letra = prompt("Indica una letra").toUpperCase();
// } while (letra != abecedario[numeroAleatorio])

// alert("Adivinaste .. es la letra " + abecedario[numeroAleatorio]);



// /***************************** */


// console.log("Primero 10 numero pares con do");
// let contador = 0;
// let numero = 1;
// do {
//     if (numero % 2 == 0) {
//         console.log("par " + numero);
//         contador++;
//     }
//     numero++;
// } while (contador < 10);


// /**  Con while */
// console.log("Primero 10 numero pares con while");
// contador = 0;
// numero = 1;
// while (contador < 10) {
//     if (numero % 2 == 0) {
//         console.log("par " + numero);
//         contador++;
//     }
//     numero++;
// } 


/************************************ */
/** Actividad 2.12 */

// for (let i = 1; i <= 100; i += 7) {
//     console.log("Multiplos de 7 _>" + i);
// }


// BREAK ////  CONTINUE

// const TABLA = 9;
// for (let index = 0; index <= 10; index++) {
//     console.log(`${TABLA} x ${index} = ${TABLA * index}`);
//     if (index == 5) {
//         break;
//     }

// }

// muestra los diez primeros que mo seam multiplos
let contadorS = 0;
let numeroS = 1;
while (contadorS < 10) {
    if (numeroS % 3 == 0) {
        numeroS++;
        continue; //no ejecuta las suguientes lineas y vuelve al while
    }
    if (numeroS % 2 != 0) {
        console.log("Es impar " +numeroS);
        contadorS++;
    }
    numeroS++;
}

