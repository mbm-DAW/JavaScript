let myMapa = new Map();
myMapa.set('monico', 'fghftyjfytkfryk');
myMapa.set('ana', 'iluolhfgbjf');
myMapa.set('leticia', 'xukhumjfy');
myMapa.set('pedro', 'edcfbhjjk');
myMapa.set('juan', 'gdfrrgtyy');
console.log('Ordenacion original: ', myMapa);

/** Inicializa un array con los valores del mapa y ordena */
let myArraySort = new Array();
let contador = 0
for (let item of myMapa) {
    myArraySort[contador++] = [item[1],item[0]]
}
myArraySort.sort();

/** Crea un mapa con la ordenacion del array */
let myMapa2= new Map();
for(let item of myArraySort){
    myMapa2.set(item[1],item[0]);
}
console.log('Ordenacion por los valores',myMapa2);

