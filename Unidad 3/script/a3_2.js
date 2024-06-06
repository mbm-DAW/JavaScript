let colores = [5];
colores[0] = ['Naranja', '#F39C12'];
colores[1] = ['Lima', '#C0F312'];
colores[2] = ['Turquesa', '#12F3E5'];
colores[3] = ['Rosa', '#F312AF'];
colores[4] = ['Rojo', '#F31212'];

// console.log(colores);

// for (i = 0; i < 5; i++) {
//     console.log(colores[i][0] + ': ' + colores[i][1]);
// }


let col = document.querySelector('#colores');
for (i = 0; i < colores.length; i++) {
    let opcion = document.createElement('option');
    opcion.textContent = colores[i][0];
    opcion.setAttribute("value", i);
    col.appendChild(opcion);

}


let contenedor = document.querySelector(".container");
col.addEventListener("change", function () {
    if (col.value == "") {
        contenedor.style.backgroundColor = '#130000';
        contenedor.style.backgroundImage = 'url(../img/fondo.jpg';
    }
    else {
        contenedor.style.backgroundColor = colores[col.value][1];
        contenedor.style.backgroundImage="none"
    }





});


//console.log(col.value);
contenedor.style.border = "5px solid #fff";
contenedor.style.borderRadius = "35px";


