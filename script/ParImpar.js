let boton = document.querySelector(".boton");

boton.addEventListener("click", function () {
    let num = document.querySelector("#numero").value;
    if (num == "") {
        document.querySelector(".mensajeError").innerHTML = "Debe ingresar un numero para poder indicar si es par o Impar.";
        return
    }
    else{
        document.querySelector(".mensajeError").innerHTML ="";


    }


    if (num % 2 == 0) {
        document.querySelector(".mensaje").innerHTML = `El numero ${num} es PAR`;
    }
    else {
        document.querySelector(".mensaje").innerHTML = `El numero ${num} es IMPAR`;
    }
})