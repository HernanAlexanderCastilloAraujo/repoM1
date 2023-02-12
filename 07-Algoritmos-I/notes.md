```javascript

```

ALGORITMOS
es un cunjunto prescrito de instrucciones ordenadas que permitan realizar una actividad mediante pasos sucesivos que no generen dudas a quien deba realizar dicha actividad.

objetivos de un algoritmo....
Resolver el problema....
Ser comprensible....
Ser eficiente...

EFICIENCIA...
se mide en funcion del tiempo, espacio y otros recursos (velocidad de red, graficas, hardware...)
el termino espacio se refiere a la memoria que utliza un algoritmo para trabajar....

En regla general, se le da importancia a la eficiencia en tiempo... ya que el espacio en memoria se recupera y se vuelve a reutilizar... si impargo la respuesta mas acertada es.... ¡DEPENDE!

BIG O NOTATION

```javascript
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9, 10, 11, 12];

// for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//         console.log(arr1[i] + arr2[j]);
//     }
// }
// //Complejidad de O(n * n) o n^2

const arr1 = [1, 2, 3, 4, 5, 6, 7];

// for(let i = 0; i < arr1.length; i++){
// for(let j = 0; j < arr1.length; j++){
//     console.log(arr1[i]+arr1[j])
// }
// }

// 1 + 1 = 2 ineficiencia
// 1 + 2 = 3
// 1 + 3 = 4
// 1 + 4 = 5
// 1 + 5 = 6
// 1 + 6 = 7
// 1 + 7 = 8

// 2 + 1 = 3 ineficiencia
// 2 + 2 = 4 ineficiencia
// 2 + 3 = 5
// 2 + 4 = 6
// 2 + 5 = 7
// 2 + 6 = 8
// 2 + 7 = 9

// 3 + 1 = 4 ineficiencia
// 3 + 2 = 5 ineficiencia
// 3 + 3 = 6 ineficiencia
// 3 + 4 = 7
// 3 + 5 = 8
// 3 + 6 = 9
// 3 + 7 = 10

// un ejemplo mas eficiente

for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    console.log(arr1[i] + arr1[j]);
  }
}
```

ALGORITMOS DE ORDENAMIENTO
los algoritmos de ordenamientos, son algoritmos que ordenan de diferente manera... se han diseñado varios a lo largo del tiempo, a continuacion los más conocidos....

```javascript
let array = [5, 6, 3, 1, 8, 7, 2, 4];

// BUUBLE SORT
// El buuble sort ordena por pares iterativamente, primero, ordena la primera pareja de numeros, posteriormente, ordena la pareja "[1] y [2]", asi sucesivamente hasta el final del array, luego vuelve a empezar y da el ciclo hasta que no haya mas numeros que ordenar..
// lo que hace este algoritmo es llevar el numero mayor hasta el final en cada iteracion, mientras ordena un poco los numeros anteriores, por eso se llama "bubble sort" (ordenamiento de burbuja, una pareja de numeros se ordena como si fueran burbujas que se van moviendo de lugar)
function bubbleSort(array) { 
  for (let i = 0; i < array.length - 1; i++) {
    // este for sirve para recorrer el array
    let cont = 0 // esta bandera sirve para no dar más ciclos cuando el array esté ordenado
    for (let j = 0; j < array.length - i - 1; j++) {
      // este for sirve para que en cada ciclo se dé una comparacion menos, ya que en cada ciclo se ordena un elemento al final del array
      if (array[j] > array[j + 1]) {
        // si el elemento actual es mayor al siguiente, se intercambian
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
        count++;
      }
      console.log(array);
    }
     if (cont === 0) {
    break;
      }
  }
}

bubbleSort(array);

// RESULTS:
// [  5, 6, 3, 1,  8, 7, 2, 4][  5, 3, 6, 1,  8, 7, 2, 4][  5, 3, 1, 6,  8, 7, 2, 4][  5, 3, 1, 6,  8, 7, 2, 4][  5, 3, 1, 6,  7, 8, 2, 4][  5, 3, 1, 6,  7, 2, 8, 4][  5, 3, 1, 6,  7, 2, 4, 8][  3, 5, 1, 6,  7, 2, 4, 8][  3, 1, 5, 6,  7, 2, 4, 8][  3, 1, 5, 6,  7, 2, 4, 8][  3, 1, 5, 6,  7, 2, 4, 8][  3, 1, 5, 6,  2, 7, 4, 8][  3, 1,5, 6,  2, 4, 7, 8][  1, 3, 5, 6,  2, 4, 7, 8][  1, 3, 5, 6,  2, 4, 7, 8][  1, 3, 5, 6,  2, 4, 7, 8][  1, 3, 5, 2,  6, 4, 7, 8][  1, 3, 5, 2,  4, 6, 7, 8][  1, 3, 5, 2,  4, 6, 7, 8][  1, 3, 5, 2,  4, 6, 7, 8][  1, 3, 2, 5,  4, 6, 7, 8][  1, 3, 2, 4,  5, 6, 7, 8][  1, 3, 2, 4,  5, 6, 7, 8][  1, 2, 3, 4,  5, 6, 7, 8][  1, 2, 3,4,  5, 6, 7, 8][  1, 2, 3, 4,  5, 6, 7, 8][  1, 2, 3, 4,  5, 6, 7, 8]


// INSERTION SORT
// El insertion sort recorre iterativamente observando hacia atrás, llevando un numero de la posicion i hasta donde no haya numeros mayores que él mismo, es decir, si el numero de la posicion i es menor que el numero de la posicion i-1, entonces el numero de la posicion i se mueve hacia atras hasta que no haya mas numeros mayores que él.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // for para recorrer la lista de izquierda a derecha
    let aux = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > aux) {
      // while para recorrer la lista hacia atras
      array[j + 1] = array[j]; // se empuja el valor hacia adelante
      j--; // se mueve hacia atras
      console.log(array);
    }
    array[j + 1] = aux; // se inserta el valor en la posicion cuando no haya valor mayor atras o cuando se llegue al principio de la lista
  }
}
insertionSort(array);

// RESULTS:
// [  5, 6, 6, 1,  8, 7, 2, 4][  5, 5, 6, 1,  8, 7, 2, 4][  3, 5, 6, 6,  8, 7, 2, 4][  3, 5, 5, 6,  8, 7, 2, 4][  3, 3, 5, 6,  8, 7, 2, 4][  1, 3, 5, 6,  8, 8, 2, 4][  1, 3, 5, 6,  7, 8, 8, 4][  1, 3, 5, 6,  7, 7, 8, 4][  1, 3, 5, 6,  6, 7, 8, 4][  1, 3, 5, 5,  6, 7, 8, 4][  1, 3, 3, 5,  6, 7, 8, 4][  1, 2, 3, 5,  6, 7, 8, 8][  1, 2,3, 5,  6, 7, 7, 8][  1, 2, 3, 5,  6, 6, 7, 8][  1, 2, 3, 5,  5, 6, 7, 8]


// SELECTION SORT
// El selection sort selecciona el numero menor del array y lo manda al principio, luego recorre el array desde la posicion 1 y selecciona el numero menor de los que quedan y lo manda a la posicion 1, asi sucesivamente hasta que no haya mas numeros que ordenar.

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // for para recorrer el array
    let iMin = 0; // indice del valor minimo de cada ciclo
    let min = array[i]; // valor minimo de cada ciclo
    for (let j = i; j < array.length + 1; j++) {
      // for para recorrer el array desde el indice i
      if (array[j] < min) {
        // si el valor del array en la posicion j es menor del valor minimo del ciclo, entonces el valor minimo del ciclo es el valor del array en la posicion j y el indice del valor minimo del ciclo es j
        min = array[j];
        iMin = j;
      }
    }
    if (min < array[i]) {
      // si el valor minimo del ciclo es menor que el valor del array en la posicion i, entonces se intercambian los valores de las posiciones i y iMin
      let aux = array[i];
      array[i] = min;
      array[iMin] = aux;
    }
    console.log(array);
  }
}
selectionSort(array);

// RESULTS:
// [ 1, 6, 3, 5, 8, 7, 2, 4 ] => [ 1, 2, 3, 5, 8, 7, 6, 4 ] => [1, 2, 3, 5, 8, 7, 6, 4 ][ 1, 2, 3, 4, 8, 7, 6, 5 ] => [ 1, 2, 3, 4, 5, 7, 6, 8 ] => [ 1, 2, 3, 4, 5, 6, 7, 8 ] => [ 1, 2, 3, 4, 5, 6, 7, 8 ] => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```
