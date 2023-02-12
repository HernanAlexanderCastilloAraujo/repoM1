const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
  // Tu código aca:

  //countArray debe determinar la suma de todos los números contenidos en el array.
  //En el array puede haber arrays anidados de números.
  // se debe determinar si cada elemento es un valor unico o un array anidado
  // si es un valor unico se debe sumar a la variable suma
  // si es un array anidado se debe llamar a la funcion countArray recursivamente

  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      suma += countArray(array[i]);
    } else {
      suma += array[i];
    }
  }

  return suma;
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  //countProps debe determinar la cantidad de propiedades de objetos en cualquier nivel
  //se debe determinar si cada propiedad es un valor unico o un objeto anidado
  //si es un valor unico se debe sumar a la variable suma
  //si es un objeto anidado se debe llamar a la funcion countProps recursivamente
  // se debe sumar 1 a la variable suma por cada propiedad del objeto
  // diferenciar entre array y objeto ya que array es una instancia de object
  let count = 0;

  for (let key in obj) {
    count++;
    console.log(key);
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      count += countProps(obj[key]);
    }
  }
  return count;
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  // changeNotNumbers deberá cambiar aquellos valores que no puedan castearse a numeros por 'Kiricocho'
  // debe recorrer la lista y verificar si el valor del nodo puede castearse a numero
  //contar la cantidad de cambios que hizo
  // se debe verificar si el valor del nodo puede castearse a numero

  let current = this.head;
  let count = 0;

  while (current) {
    if (isNaN(current.value)) {
      current.value = "Kiricocho";
      count++;
    }
    current = current.next;
  }
  return count;
};

// while (current) {} => {} => {} => {} => {} => llega al ultimo next que es null y sale del while
// while (current.next) {} => {} => {} => {} => llega al penultimo next que es un nodo y sale del while => {}
// while (current.next.next) {} => {} => {} => llega al antepenultimo next que es un nodo y sale del while => {} => {}

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  // la funcion debe mergear los nodos de las dos queues
  // se debe crear una nueva queue
  // se debe intercalar los nodos de las dos queues en la nueva queue hasta que una de las dos queues este vacia,luego se debe agregar el resto de los nodos de la queue que no este vacia
  // se debe utilizar el metodo enqueue para agregar nodos a la nueva queue
  // se debe utilizar el metodo dequeue para sacar nodos de las queues originales

  let queue = new Queue();
  while (queueOne.size() > 0 || queueTwo.size() > 0) {
    if (queueOne.size() > 0) {
      queue.enqueue(queueOne.dequeue());
    }
    if (queueTwo.size() > 0) {
      queue.enqueue(queueTwo.dequeue());
    }
  }
  return queue;
};
// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:

  // debe retornar una funcion que reciba un numero y retorne el producto del numero recibido por el parametro multiplier

  return function (num) {
    return num * multiplier;
  };
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  // debe retornar la suma total de los valores dentro de cada nodo del arbol
  let sum = 0;
  let funcionSum = function (value) {
    sum += value;
  };
  this.depthFirstForEach(funcionSum);
  return sum;
};

BinarySearchTree.prototype.depthFirstForEach = function (call) {
  if (this.left) this.left.depthFirstForEach(call);
  call(this.value);
  if (this.right) this.right.depthFirstForEach(call);
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
