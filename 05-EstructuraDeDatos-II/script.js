function HashTable(){
    this.buckets = [];
    this.numBuckets = 10;
    this.size = 0;
}
HashTable.prototype.hash = function(key){
    let total = 0
    for(let i = 0; i < key.length; i++){
        total += key.charCodeAt(i);
    }
    let resultado = total % this.numBuckets;
    return resultado
}

