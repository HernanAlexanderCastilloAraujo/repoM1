"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return "El número no es valido";
  } else {
    return n * nFactorial(n - 1);
    // 5 -->  120
    // f(5) = 5 * f(4);
    // f(4) = 4 * f(3);
    // f(3) = 3 * f(2);
    // f(2) = 2 * f(1);
    // f(1) =   1;
    // f(2) =   2;
    // f(3) =   6;
    // f(4) =  24;
    // f(5) = 120;
  }
}

function nFibonacci(n) {
  if (n > -1 && n < 2) {
    return  Number(n);
  } else if (n < 0) {
    return "El número no es valido";
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
  // 6 --> 8
// f(6) = f(5) + f(4);
// f(5) = f(4) + f(3);
// f(3) = f(2) + f(1);
// f(2) = f(1) + f(0);
// f(1) = 1;
// f(0) = 0;
// f(2) = 1 + 0;
// f(3) = 1 + 1;
// f(4) = 2 + 1;
// f(5) = 3 + 2;
// f(6) = 5 + 3;

}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.queue = [];
}
Queue.prototype.enqueue = function (value) {
  this.queue.push(value);
}
Queue.prototype.dequeue = function () {
 return this.queue.shift(); // shift ya retona undefined si el array está vacio
}
Queue.prototype.size = function () {
  return this.queue.length;
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
