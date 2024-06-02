let myMapa = new Map();
myMapa.set('70336849C','Mónico Bellón Morales');
myMapa.set('70336884D','Ana Gregoria Sierra Sierra');
myMapa.set('12536589A',"Juan Antonio Fernandez");
myMapa.set('64644815F','Elisa Garcia Bustamante');
myMapa.set('74964664H','Pedro Arribas Rodriguez');
myMapa.set('56987425U','Ana Belen Ortigas Santia');
myMapa.set('25688899T','Andres Hernandez Zeus');
myMapa.set('69854258Y','Mara Hernandez Sierra');
myMapa.set('85269888K','Jose Barcelona Ganador');
myMapa.set('85269888E','2Jose Barcelona Ganador');

console.log(myMapa);
for([dni,nombre] of myMapa){
    console.log('DNI:'+dni+'\tNombre: '+nombre);
}

myMapa.set('12536589A','Juan Antonio Fernandez CORREGIDO');
console.log(myMapa);
console.log('Clave: 12536589A   ' +myMapa.get('12536589A'))
