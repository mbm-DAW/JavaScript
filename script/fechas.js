
let dias = document.querySelector("#dias");
let meses = document.querySelector("#mes");
let anios = document.querySelector("#anio");




for (let anio = 2024; anio >= 2014; anio--) {
    opcion = document.createElement("option");
    opcion.textContent = anio;
    opcion.value = anio;
    anios.appendChild(opcion);
}
for (let mes = 1; mes <= 12; mes++) {
    opcion = document.createElement("option");
    opcion.textContent = mes;
    opcion.value = mes;
    opcion.classList.add("despegable","lista"); //agrega class
    // opcion.classListremove-> quitar una clase
    opcion.setAttribute("id",mes); //agrega id
    meses.appendChild(opcion);
}
for (let dia = 1; dia <= 31; dia++) {
    //crear un elemento en el DOM
    opcion = document.createElement("option");
    opcion.textContent = dia;
    opcion.value = dia;
    dias.appendChild(opcion);

}

