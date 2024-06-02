let numeros=[12,45,23,78,98,11,24,33,41,67];
let numeros2=[];

for(let item of numeros){
    if (!(item%3)){
        numeros2.push(item);
    }
}

console.log(numeros);
console.log(numeros2);