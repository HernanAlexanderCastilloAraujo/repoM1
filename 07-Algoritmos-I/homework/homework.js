"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //// ejercicio dado por el estudiante
  // let array = [1];
  // for (let i = 2; i <= num; i++) {
  //   let count = 0;
  //   for (let j = 1; j <= i; j++) {
  //     if (i % j === 0) {
  //       count++;
  //     }
  //   }
  //   if (count <= 2) {
  //     while (num % i === 0) {
  //       array.push(i);
  //       num = num / i;
  //     }
  //   }
  // }
  // return array;

  // ejercicio dado por el profesor
  // tengo un número. anotar en algun lado todos sus divisores primos(división entera)
  // se sabe que el 1 es un divisor siempre...
  // se aunmenta el divisor en 1
  // si la división da entera, anotar el divisor, sino, pasar al siguiente y se vuelve a probar
  // esto se repite hasta que el número sea 1

  //// estudante despues de palabras del profesor
  // let array = [1];
  // for (let i = 2; i <= num; i++) {
  //   while (num % i === 0) {
  //     array.push(i);
  //     num = num / i;
  //   }
  // }
  // return array;

  // profesor en clase
  let array = [1];
  let div = 2;
  while (num > 1) {
    if (num % div === 0) {
      array.push(div);
      num = num / div;
    } else {
      div++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // ejercicio dado por el estudiante
  for (let i = 0; i < array.length - 1; i++) {
    let cont = 0;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
        cont++;
      }
    }
    if (cont === 0) {
      return array;
    }
  }
  return array;

  //// ejercicio dado por el profesor
  // se tiene una lista de números desordenados
  // se recorre la lista de izquierda a derecha uno por uno
  //se forma burbujas de un numero con el siguiente, y se pregunta si están ordenados...
  // si están ordenados, se pasa al siguiente par de números, sino, se intercambian...
  // se mira si la lista ya está ordenada, si no lo está, se vuelve a empezar
  // se repite hasta que la lista esté ordenada

  //   let desordenado = true;
  //   while (desordenado) {
  //     desordenado = false;
  //     for (let i = 0; i < array.length - 1; i++) {
  //       if (array[i] > array[i + 1]) {
  //         let aux = array[i];
  //         array[i] = array[i + 1];
  //         array[i + 1] = aux;
  //         desordenado = true;
  //       }
  //     }
  //   }
  // el ejercicio resuelto por el profesor tiene un problema, y es que en todas las iteraciones se recorre todo el array, y no es necesario, ya que en cada ciclo se ordena un elemento más, por lo que en la siguiente iteración se puede recorrer un elemento menos, y así sucesivamente...
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //// ejercicio dado por el estudiante
  // for (let i = 1; i < array.length; i++) {
  //   let aux = array[i];
  //   for (let j = 1; j <= i; j++) {
  //     if (array[i - j] > aux) {
  //       array[i - j + 1] = array[i - j];
  //       array[i - j] = aux;
  //     }
  //   }
  // }
  // return array;

  // ejercicio dado por el profesor   RESPUESTA CORRECTA...
  //tengo una lista de números desordenados
  //sacar cada numero y compararlo con los anteriores
  // si el de atras es mayor, se empuja hacia adelante.....
  // se suelta cuando el valor anterior es menor o cuando se llega al principio de la lista
  /// se tira el numero hacia atras mientras no esté en el principio de la lista y el valor anterior sea mayor
  // se repite esto con cada elemento de la lista menos el primero

  for (let i = 1; i < array.length; i++) { 
    let aux = array[i];
    let j = i - 1;
while(j >= 0 && array[j] > aux){ 
  array[j + 1] = array[j]; 
  j--; 
  }
  array[j + 1] = aux; 
}
return array;
}
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //// ejercicio dado por el estudiante
  // for (let i = 0; i < array.length - 1; i++) {
  //   let iMin = 0;
  //   let min = array[i];
  //   for (let j = i; j < array.length + 1; j++) {
  //     if (array[j] < min) {
  //       min = array[j];
  //       iMin = j;
  //     }
  //   }
  //   if (min < array[i]) {
  //     let aux = array[i];
  //     array[i] = min;
  //     array[iMin] = aux;
  //   }
  // }
  // return array;

  // ejercicio dado por el profesor casi igual al del estudiante(co una variable menos)
  // se recorre toda la lista
  // se guarda el menor de todos los valores que se recorrierion
  // se intercambia el menor con el primer valor del ciclo
  // se repite el proceso con la lista sin el primer valor

  for (let i = 0; i < array.length + 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
