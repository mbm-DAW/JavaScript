let boton = document.querySelector(".boton");

// necesitamos que cuando pulse en el boton haga una condicion 

boton.addEventListener("click", function () {

    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;

    let mensaje;
    let msnError = "";
    let error = false;


    if (edad <= 12)
        mensaje = "eres una niña";
    else if (edad >= 13 && edad <= 17)
        mensaje = "eres un adolescente";
    else if (edad >= 18 && edad <= 64)
        mensaje = "eres untrabajador";
    else if (edad >= 5 && edad <= 100)
        mensaje = "eres un Jubilado";
    else
        mensaje = " TAS PASAOO";

    //validacion de datos de entrada

    if (edad < 0 || edad == "") {
        msnError = "La edad no es correcta. ingrese una edad correcta.";
        error = true;
    }
    else if (nombre === "") {
        msnError += " El nombre no puede ser vacio";
        error = true;
    }

    if (error) {
        document.querySelector(".mensaje").innerHTML = "";
        document.querySelector(".mensajeError").innerHTML = `${msnError}`;
    }
    else {
        document.querySelector(".mensajeError").innerHTML = "";
        document.querySelector(".mensaje").innerHTML = `${nombre} tienes ${edad} años y ${mensaje}`;
    }


   
})

