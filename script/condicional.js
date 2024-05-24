/* Entrada a un pub -> mayor de 18 años*/
// let edad = Number(prompt("Edad")); // conversion a numerico
// verificar que dato sea numerico

// console.log(typeof (edad)); // si es string pasarlo a numerico

// si tiene mayor que 18 años

// let entrada=false; // se inicializa para que nadie entre si no cumple 

// if (edad >= 18) {
//     entrada = true;
// }

// console.log("Puede entrar al Pub->" + entrada)


/********************************************/
// /** Ejemplo de if anidado donde se declara un animal y luego se va entrando en diferentes if hasta llegar al ultimo */
// let mascota = "gato";
// if (mascota == "perro") {
//     console.log("la mascota es perro");
// } else if (mascota == "tortuga") {
//     console.log("la mascota es tortuga");
// }
// else if (mascota == "canario") {
//     console.log("la mascota es canario");
// } else {
//     console.log(mascota);
// }
/** No se cumple ninguna de las condiciones  y se va al final*/

// /** Si ana tiene dinero y el articulo esta en venta podra irse de compra sino se queda en casa */
// let dinero = prompt("¿Tienes dinero?");
// let enVenta = prompt("¿Esta en venta?");

// if (dinero.toUpperCase()=="SI" && enVenta.toUpperCase()=="SI") {
//     console.log("Puede comprar");
// } else {
//     console.log("Ana se queda en casa");
// }

// /** Switch */
// console.log("Menu abierto");
// let letra = prompt("Opcion: a=abrir,c=copiar,p=pegar")
// switch (letra) {
//     case 'a':
//     case"A":
//         console.log("Abrir archivo")
//         break;
//     case 'c',"C": //no funciona
//         console.log("Copiar")
//         break;
//     case 'p',"P":
//         console.log("Pegar")
//         break;
//     default:
//         console.log("Opcion incorrecta");

// }
// console.log("Menu cerradp");



// Actividad 2.9


let letra = prompt("Digite el dia la semana (L,M,X,J,V,S,D)")
letra = letra.toUpperCase();
switch (letra) {
    case "L":
        console.log("Horario desde las 10horas hasta 14horas")
        break;
    case "M":
        console.log("Horario desde las 12horas hasta 15horas")
        break;
    case "X":
        console.log("Horario desde las 11horas hasta 14horas")
        break;
    case "J":
        console.log("Horario desde las 8horas hasta 12horas")
        break;
    case "V":
        console.log("Horario desde las 6horas hasta 18horas")
        break;
    case "S":
        console.log("Horario solo mañanas")
        break;
    case "D":
        console.log("Cerrado todo el dia")
        break;
    default:
        console.log("Opcion incorrecta");

}


