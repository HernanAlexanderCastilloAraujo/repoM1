```javascript


```

CONTINUACIÓN ALGORITMOS DE ORDENAMIENTO... 

Algoritmos de ordenamiento recursivos...

```javascript

let array = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 10];

// QUICKSORT

function quickSort(array) {
  // funcion que determina un pivote, y separa los elementos del array en dos arrays, uno con los elementos menores al pivote y otro con los elementos mayores al pivote, luego se llama a la funcion quickSort para ordenar los elementos de los arrays menores y mayores al pivote, hasta que el array tenga un solo elemento, luego se concatena los arrays ordenados con el pivote en el medio, y se devuelve el array ordenado
  if (array.length <= 1) {
    // si el array tiene un solo elemento, se devuelve el array
    return array;
  }
  let pivot = array[Math.floor(array.length / 2)]; // el pivote es el elemento del medio del array, si el array tiene un numero par de elementos, el pivote es el elemento de la izquierda del elemento del medio
  let left = []; // array que contendra los elementos menores al pivote
  let right = []; // array que contendra los elementos mayores al pivote
  let equal = []; // array que contendra los elementos iguales al pivote
  for (let i = 0; i < array.length; i++) {
    // se recorre el array
    if (array[i] < pivot) {
      // si el elemento es menor al pivote, se agrega al array de los elementos menores al pivote
      left.push(array[i]);
    } else if (array[i] > pivot) {
      // si el elemento es mayor al pivote, se agrega al array de los elementos mayores al pivote
      right.push(array[i]);
    } else {
      // si el elemento es igual al pivote, se agrega al array de los elementos iguales al pivote
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(equal, quickSort(right)); // se llama a la funcion quickSort para ordenar los elementos de los arrays menores y mayores al pivote, hasta que el array tenga un solo elemento, luego se concatena los arrays ordenados con el pivote en el medio, y se devuelve el array ordenado
}

console.log(quickSort(array)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10 ]

//MERGESORT

function mergeSort(array) { // funcion que divide el array en dos partes, se llama a si misma hasta que el array tenga un solo elemento, y luego se llama a la funcion merge para combinar los arrays ordenados en uno solo ordenado
  if (array.length <= 1) { // si el array tiene un solo elemento, se devuelve el array
    return array;
  }
  let left = array.slice(0, Math.floor(array.length / 2)); // se divide el array en dos partes, la primera parte va desde el primer elemento hasta la mitad del array
  let right = array.slice(Math.floor(array.length / 2)); // la segunda parte va desde la mitad del array hasta el ultimo elemento
  return merge(mergeSort(left), mergeSort(right)); // se llama a la funcion merge para combinar los arrays ordenados en uno solo ordenado
}

function merge(left, right) {
  // la funcion merge combina dos array ordenadnos, en uno solo ordenado....
  let result = []; // se crea un array vacio para guardar los elementos ordenados
  while (left.length && right.length) { // mientras que los arrays tengan elementos, se comparan los primeros elementos de cada array, y se agrega el menor al array result y se elimina del array original con el metodo shift
    if (left[0] < right[0]) { // si el primer elemento del array left es menor que el primer elemento del array right, se agrega el elemento left[0] al array result y se elimina del array left
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right); // como uno de los arrays quedo vacio, se concatena el array result con el array que no quedo vacio, como los arrays ya estan ordenados, se concatena el array que tiene elementos restantes

}

console.log(mergeSort(array)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10 ]


```