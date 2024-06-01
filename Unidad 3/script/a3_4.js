let equipos = new Array(10);

/** Nombre,Puntos,Partidos_jugados,_ganados,_empatados,_perdidos,Goles_afavor,_enContra */


    equipos[0]=['Escobedo',68,34,21,5,8,58,30];
    equipos[1]=['Laredo',61,34,20,5,8,34,45];
    equipos[2]=['Torina',60,34,19,5,8,67,23];
    equipos[3]=['Atlético Alberica',58,34,21,5,8,37,67];
    equipos[4]=['Vimenor',57,34,18,5,8,43,45];
    equipos[5]=['Tropezón',56,34,17,5,8,23,12];
    equipos[6]=['Bezana',52,34,17,5,8,23,45];
    equipos[7]=['Castro',48,34,16,5,8,34,47];
    equipos[8]=['Cultural',46,16,21,5,8,44,34];
    equipos[9]=['Revilla',47,31,21,7,8,45,33];

    for(let e of equipos){
        console.log(`Equipo: <<${e[0]}>>  \t\tPuntos: ${e[1]} \t${e[2]} Partidos jugados (${e[3]}ganados, ${e[4]}empatados, ${e[5]}perdidos) \tGoles a favor:${e[6]} en contra ${e[7]}`);
    }
    
