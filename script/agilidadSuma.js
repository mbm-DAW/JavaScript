let contador=0;
let resultadoUser=0;
let resultadoMaquina=0;
let sumando1=0;
let sumando2=0;

do{
    sumando1=parseInt(Math.random()*100+1);
    sumando2=parseInt(Math.random()*100+1);
    resultadoMaquina=sumando1+sumando2;
    resultadoUser=Number(prompt("Indica el resultado de "+sumando1+ " mas "+sumando2));
    if(resultadoUser==resultadoMaquina){
        contador++;
        alert("correcto");
    }
} while(resultadoMaquina==resultadoUser);
alert("Fallaste. resultado incorrecto");