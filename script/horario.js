


let horario="";
let botones = document.querySelectorAll(".boton");
botones.forEach(pinchado => {
    pinchado.addEventListener("click", function () {

        switch (pinchado.value) {
            case "L":
                horario = "LUNES Horario desde las 10horas hasta 14horas";
                break;
            case "M":
                horario = "MARTES Horario desde las 10horas hasta 14horas";
                break;
            case "X":
                horario = "MIERCOLES Horario desde las 10horas hasta 14horas";
                break;
            case "J":
                horario = "JUEVES Horario desde las 10horas hasta 14horas";
                break;
            case "V":
                horario = " VIERNES Horario desde las 10horas hasta 14horas";
                break;
            case "S":
                horario = "SABADO Horario desde las 10horas hasta 14horas";
                break;
            case "D":
                horario = "DOMINGO CERRADO";
                break;

        }
document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;



    })




})

