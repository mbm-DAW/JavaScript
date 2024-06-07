// let alumnos = ["Juan Rodriguez", "Marina Torres", "Dani Lopez", "Tania Pinero", "Sergio Castro", , , , , , , ,];
// alumnos[5] = "Arantxa Gonzalez";


// //console.log(alumnos);


// /**
//  * 
//  * ACTIVIDA RESUELTA 3.1
//  */

// let localidades = ["Quintanar", "Tomelloso", "Alcazar", "Cinco Casa", "Mota"];
// let indice = 0;
// while (indice < localidades.length) {
//     if (indice % 2 != 0) {
//         console.log(localidades[indice]);
//     }
//     indice++;
// }

// console.log('---------------------------');

// for (let i = 0; i < localidades.length; i++) {
//     console.log(localidades[i]);

// }


// /** Crear array bidimensional del 1 al 10
//  * 5 filas 
//  * 4 columnas
//  */
// let arrayFC = new Array(5);

// for (let i = 0; i < 5; i++) {
//     arrayFC[i] = [] //new Array(4);
//     for (let y = 0; y < 4; y++) {
//         arrayFC[i][y] = parseInt(Math.random() * 10);
//     }


// }
// console.log(arrayFC);


/** actividad propuesta 3.3 */
let arraD = new Array(3)

for (f = 0; f < arraD.length; f++) {
    arraD[f] = new Array(3);
    for (let c = 0; c < arraD[f].length; c++) {
        let s = `d${f}${c}`;
        document.getElementById(s).innerHTML = Math.floor(Math.random() * 100);
        if (f == c) {
            document.getElementById(s).style.color = "red";
        }
    }
}
console.log(arraD);