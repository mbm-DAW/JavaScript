numeroBinario=0b11111111;
numeroOctal=0o011;
numeroHexadecimal=0xff;
numeroBigInt=10000000000000000000000000000000000000000000000000000000000000000000000000000000000n;
obj={'Tipo de peinado':'Simple','Peluca':true};

console.log('Numero binario: '+numeroBinario,);
console.log('Numero octal: '+numeroOctal,);
console.log('Numero hexadecimal: '+numeroHexadecimal);
console.log('Numero BigInt: '+numeroBigInt);

divisionPorCero=23/0;
console.log('Division por cero: '+divisionPorCero);
console.log('Division por cero mas 12: '+(divisionPorCero+12));


console.log(numeroBigInt,obj);
console.dir(numeroBigInt,obj);
console.table(numeroBigInt,obj);