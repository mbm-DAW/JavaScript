
/**
 * Declaracion de objetos DOM
 */
dias = document.getElementById('dias');
horas = document.getElementById("horas");
minutos = document.getElementById("minutos");
resultado = document.getElementById("resultado");
advertencia = document.getElementById("advertencia");
calcular = document.getElementById("calcular"); //btn


/**
 * Delcaracion de Eventos
 */
calcular.addEventListener("click", function () {
    /**Declaracion e inicializacion de variables */
    let mensajeErr = "";
    let numDias = 0;
    let numHoras = 0;
    let numMinutos = 0;
    let numSegundos = 0;

    if (isNaN(dias.value))
        mensajeErr += "El numero de dias incorrecto.\n";
    else
        numDias = Number(dias.value);

    if (isNaN(horas.value))
        mensajeErr += "El numero de horas incorrecto";
    else
        numHoras = Number(horas.value);

    if (isNaN(minutos.value))
        mensajeErr += "El numero de minutos incorrecto";
    else
        numMinutos = Number(minutos.value);





    console.log(numDias,numHoras,numMinutos, mensajeErr);

    if (mensajeErr == "") {
        advertencia.innerHTML = '';
        numSegundos=(numDias*24*60*60)+(numHoras*60*60)+(numMinutos*60);
        resultado.innerHTML=numSegundos;
    }
    else {
        advertencia.innerHTML = mensajeErr;
        resultado.innerHTML="";
    }
});







dias.value = ""
