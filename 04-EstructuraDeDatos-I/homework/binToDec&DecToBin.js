
// 100   -->  4
// 10110 --> 22

function decToBin (n){
if(n == 1){
return "1";
}
else{
    return decToBin(Math.floor(n/2)) + n%2;
}
}

console.log(decToBin(22));

function binToDec (n){
    if(n == 0 || n == 1){
        return Number(n);
    }
    else{
        let esBinario = n.toString().split("").every((num) => num == 0 || num == 1); // si es binario devuelve true, si no es binario devuelve false, every devuelve true si todos los elementos del array cumplen la condición
        if(!esBinario){
            return "El número no es binario";
        }else{
        n = n.toString()
        return (n[0]*Math.pow(2,n.length -1)) + binToDec(n.slice(1));
    }}
}
console.log(binToDec(100));