
let letra = "";
let mensaje="";
let contador=1;
while (letra!="S") {
    letra = prompt("Intento:"+contador+"  "+mensaje+"   Digite una letra: ");
    mensaje="HAS FALLADO. NO ES LA "+letra;
    contador++;
}
 alert("HAS ACERTADO ERA LA S");