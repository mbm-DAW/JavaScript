/**
 Tipos de variables
 
 JavaScript no obliga a definir que tipo de variable 

 */

nombre = "Maria Rojas"; //tipo de variable string, puedes utiliza comillas simples '' o dobles ""
edad = 25; // tipo Number, no necesita comillas
espaniol = true // tipo booleano solo tiene dos estados (true o false)
sexo = null;

// Como puedes ver los valores sin mostrarlos en html
// Se utiliza la funcion console.log

console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);
// operador concatenar : + une dos expresiones
console.log("nombre->" + typeof (nombre) + " otro texto");
console.log("edad->" + typeof (edad));
console.log("espaniol->" + typeof (espaniol));
console.log("sexo->" + typeof (sexo));

direccion = "calle Campo 81";
console.log("Datos Personales" + nombre + " Direccion " + direccion);
console.log(`Datos Personales ${nombre}  Direccion ${direccion})`);
//Si la variable es numerica podemos realizar operaciones matematicas
console.log("El año que viene ciumpliras" + (edad + 1) + " años");
console.log(`El año que viene cumpliras ${edad + 1}  años`);

console.log('Esta es una frase de Cervante \'En un lugar de la mancha\'');
console.log("Esta es una frase de Cervante \"En un lugar de la mancha\"");
console.log("Esta es una frase de Cervante 'En un lugar de la mancha'");
console.log("Esta es una frase de Cervante \n'En un lugar de la mancha'");
console.log("Esta es una frase de Cervante \n\t'En un lugar de la mancha'");

console.log('El signo de la eternidad Armenia \u058d');
console.log('El signo de BitCoin es \u{20bf}');

//Actividad Propuest 2.4

console.log(`El acceso a la ruta de C:\\\\usuario\\ tarda 1\'23", algo considerado "lento" en la actualidad.         `);
console.log('El acceso a la ruta de C:\\\\usuario\\ tarda 1\'23", algo considerado "lento" en la actualidad.         ');
console.log("El acceso a la ruta de C:\\\\usuario\\ tarda 1'23\", algo considerado \"lento\" en la actualidad.         ");


/* Tipos de datos numericos (number) */

altura = 1.80; //tipo de dato numerico es decimal
diametro = 2e-9; //tipo de exponencial

console.log(`Altura->${altura}`);
console.log(`Diametro->${diametro}`);
resultado = altura / 0; //Infinito
otroResultado = resultado + 10;
console.log(otroResultado);

// Si tienes otro tipo de dato y quieres hacer una operacion matematica

resultado = nombre * 25;
console.log(resultado);

resultado = nombre + " " + edad;
console.log(resultado);


// Tipos de datos booleano (true o false)
// true ->1  false ->0

valorVerdadero = 1;
valorFalso = 0;
console.log(`1 ¿true?  ${Boolean(true)}`);
console.log(`2 ¿false?  ${Boolean(false)}`);
console.log(`3 -1   ${Boolean(1)}`);
console.log(`4 -0  ${Boolean(0)}`);

// Si exite texto
texto = "Un texto de ejemplo"
console.log(`5 texto  ${Boolean(texto)}`);
textoVacio = "";
console.log(`6 textoVacio  ${Boolean(textoVacio)}`);

//Conversion de tipos

masAnios = "10"; //tipo string
console.log(edad + masAnios);
console.log(edad + Number(masAnios)); //  -> casting
console.log(String(edad) + masAnios); // -> casting a string

console.log(true * 7);
console.log(9 - true);

console.log(edad * masAnios); //conversion automatica
console.log(edad / masAnios);
console.log(edad - masAnios);

console.log(undefined / edad); //Na
console.log(null * edad); //0


parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "Es una priueba de javascrip";


cuadrado = document.querySelector(".cuadrado");

parrafo = document.querySelector("#parrafo");
parrafo.innerHTML = "Otra prueba";

titulo = document.querySelector("h1");

document.write("Es una prueba de document write")

//Variable

var edad = "cincuenta 58";
let email = "mbm@email.com";
document.write("<p>" + email + "</p>");
document.write("<p>" + edad + "</p>");

/* Ambito de bloque */

var mensaje = "Mensaje 1";

function mostrarMensaje() { // function actua como bloque
    mensaje = "Mensaje del bloque 1";
    document.write(mensaje);
}
mostrarMensaje();
document.write("<br>mensaje fuera de la function: " + mensaje)
document.write("<br>****************************************");
/* let Ambito de bloque */

let mensaje2 = "Mensaje 2";

function mostrarMensaje2() { // function actua como bloque
    let mensaje2 = "<br>Mensaje del bloque 2";
    document.write(mensaje2);
}
mostrarMensaje2();
document.write("<br>mensaje fuera de la function: " + mensaje2)

//Constantes (no se deben definir dos o mas veces.)
const IVA=21;
let precio=50*((IVA/100)+1);
document.write("<br>El precio final es " +precio);

//IVA=4; si se quita da error en la consola del inspector pero no se ve en el editor
precio=105*((IVA/100)+1);
document.write("<br>El precio final es " +precio);


//salida por consola

console.error("Aqui hay un eror");
console.info("Es una informacion");
console.warn("mensaje de aviso");
console.log("\x1b[41m colores en la consola");


// Practica 2.5
nom=prompt("Digite su Nombre:");
if(nom){
    alert("Has Aceptado tu nombre: "+nom);
}
else{
    alert("Has cancelado tu nombre ");
}

console.log('%c FIN DEL PROGRAMA', 'font-weight: bold;color:blue;text-decoration:underline;');



// // mensaje de confirmacuion
// let confirmacion = confirm("Quieres salir del programa");
// document.write(`El usuario quiere salir ${confirmacion}`);
// if (confirmacion) {
//     window.location.replace("https://google.es");
// } else {
//     alert("te quedas aqui");
// }


// // mensaje de entrada de datos
// nombre=prompt("Escribe tu nombre");
// document.write(`<br> El nombre es: ${nombre}`);













