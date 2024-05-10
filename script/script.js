/**
 Tipos de variables
 
 JavaScript no obliga a definir que tipo de variable 

 */

nombre = "Maria Rojas"; //tipo de variable string, puedes utiliza comillas simples '' o dobles ""
edad = 25; // tipo Number, no necesita comillas
espaniol = true // tipo booleano solo tiene dos estados (true o false)
sexo=null;

// Como puedes ver los valores sin mostrarlos en html
// Se utiliza la funcion console.log

console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);
// operador concatenar : + une dos expresiones
console.log("nombre->"+typeof(nombre)+" otro texto");
console.log("edad->"+typeof(edad));
console.log("espaniol->"+typeof(espaniol));
console.log("sexo->"+typeof(sexo));

direccion="calle Campo 81";
console.log("Datos Personales" + nombre + " Direccion " + direccion);
console.log(`Datos Personales ${nombre}  Direccion ${direccion})`);
//Si la variable es numerica podemos realizar operaciones matematicas
console.log("El año que viene ciumpliras" + (edad+1) + " años");
console.log(`El año que viene cumpliras ${edad+1}  años`);

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

altura=1.80; //tipo de dato numerico es decimal
diametro=2e-9; //tipo de exponencial

console.log(`Altura->${altura}`);
console.log(`Diametro->${diametro}`);
resultado=altura/0; //Infinito
otroResultado=resultado+10;
console.log(otroResultado);

// Si tienes otro tipo de dato y quieres hacer una operacion matematica

resultado=nombre*25;
console.log(resultado);

resultado=nombre+" "+edad;
console.log(resultado);


// Tipos de datos booleano (true o false)
// true ->1  false ->0

valorVerdadero=1;
valorFalso=0;
console.log(`1 ¿true?  ${Boolean(true)}`);
console.log(`2 ¿false?  ${Boolean(false)}`);
console.log(`3 -1   ${Boolean(1)}`);
console.log(`4 -0  ${Boolean(0)}`);

// Si exite texto
texto="Un texto de ejemplo"
console.log(`5 texto  ${Boolean(texto)}`);
textoVacio="";
console.log(`6 textoVacio  ${Boolean(textoVacio)}`);

//Conversion de tipos

masAnios="10"; //tipo string
console.log(edad+masAnios);
console.log(edad + Number(masAnios)); //  -> casting
console.log(String(edad) + masAnios); // -> casting a string

console.log(true*7);
console.log(9-true);

console.log(edad*masAnios); //conversion automatica
console.log(edad/masAnios);
console.log(edad-masAnios);

console.log(undefined/edad); //Na
console.log(null*edad); //0













