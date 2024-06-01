let msg =
    `Calcular el:
a) Area del triangulo (b*h/2)
b) Area del rectangulo (b*h)
c) Area del circulo (π*r**2)
d) Salir

Digite opcion a-d: `;

let opcion = '';
let base = 0;
let altura = 0;
let radio = 0;
let superficie = 0;



do {
    opcion = prompt(msg);
    switch (opcion) {
        case 'a': // Superficie del Triangulo
            do {
                base = pedirMedida('triangulo', 'base');
            } while (isNaN(base))
            if (base == null) break;

            do {
                altura = pedirMedida('triangulo', 'altura');
            } while (isNaN(altura));
            if (altura == null) break;

            superficie = (base * altura) / 2;
            console.log('la superficie es de ' + superficie);
            alert('La superficie del triangulo es de ' + superficie);
            break;

        case 'b': // Superficie del Rectangulo
            do {
                base = pedirMedida('rectangulo', 'base');
            } while (isNaN(base))
            if (base == null) break;

            do {
                altura = pedirMedida('rectangulo', 'altura');
            } while (isNaN(altura));
            if (altura == null) break;

            superficie = (base * altura);
            console.log('la superficie es de ' + superficie);
            alert('La superficie del rectangulo es de ' + superficie);
            break;


        case 'c': // Superficie del Circulo
            do {
                radio = pedirMedida('circulo', 'radio');
            } while (isNaN(radio))
            if (radio == null) break;

            superficie = Math.PI * radio ** 2;
            console.log('la superficie es de ' + superficie);
            alert('La superficie del circulo es de ' + superficie);
            break;
        case 'd':
            if (!confirm('Desea Salir?')) opcion = '';
            break;
    }


} while (opcion != 'd' && opcion != null);




function pedirMedida(poligono, medida) {
    return prompt(`Area del ${poligono}. Digite su ${medida}:`);
}

