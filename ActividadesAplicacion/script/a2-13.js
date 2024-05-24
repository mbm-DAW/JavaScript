let numero1 = 0;
let numero2 = 0;
let operacion = "";
let resultado = 0;

do {
    numero1 = Number(prompt("Digite el PRIMER numero"));
} while (isNaN(numero1))

do {
    numero2 = Number(prompt("Digite el SEGUNDO numero"));
} while (isNaN(numero2))

do {
    operacion = prompt("Que operacion quiere realizar + - * / ** %");
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case '**':
            resultado = numero1 ** numero2;
            break;
        case '%':
            resultado = numero1 % numero2;
            break;
        default:
            resultado = null
    }
} while (!resultado)


alert("RESULTADO: " + numero1 + operacion + numero2 + "=" + resultado);
