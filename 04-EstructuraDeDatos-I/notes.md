```javascript


```

RECURSIÓN
Recursión se refiere al llamado de una función desde la misma función....
la recursión es una alterinativa a la forma interativa de realizar algoritmos....
la recursión presenta una ventaja o desventaja sobre la iteración ya que si existe un bucle infinito, en la recursión se desborda la pila de ejecución, osea que se detiene cuando no haya más memoria para trabajar, en cambio en la forma interativa el bucle infinito continuará trabajando INFINITAMENTE...

EJEMPLO
```javascript
// FORMA ITERATIVA
// function cuentaRegresiva(num){
//     for(let i=num; i >= 0; i--){
//         console.log(i)
//     }
// }

//FORMA RECURSIVA
function cuentaRegreiva(num) {
  console.log(num);
  if (num > 0) {
    cuentaRegreiva(num - 1);
  }
}

cuentaRegreiva(10);

```

EJEMPLO DE FACTORIAL CON RECURSIÓN

```javascript
function factorial(n) {
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return "el número no puede ser negativo";
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); //120

// resolución de factorial por recursión

// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1 * 0!
// 0! = 1 caso base

```

ESSTRUCTURAS DE DATOS.....


```javascript
//ARRAY: datos ordenados por un indice
let pares = [2, 2, 4, 4, 6, 6, 6, 8, 8, 10]

//SET: datos ordenados pero no permite datos repetidos
const miSet = new Set(pares)
console.log(miSet) // Set(5) { 2, 4, 6, 8, 10 }
// para acceder a los datos del set
console.log(miSet.keys(0)) //

//STACKS O PILAS  -- estructura lifo
//EJEMPLO SIN RESTRICCIONES
let stack = [];
stack.push(1);
stack.push(10);
let i = stack.pop();
console.log(i);
// en el anterior bloque de código emulamos el comportamiento de una pila sin embargo, se puede romper el comportamiento con métodos como el .shift, para solucionar esto podemos crear una clase que tenga métodos definidos.

//EJEMPLO CON RESTRICCIONES
function Stack() {
  this.array = [];
}

Stack.prototype.add = function (element) {
  this.array.push(element);
};
Stack.prototype.remove = function () {
  this.array.pop();
};
let stack1 = new Stack();
//stack1.shift(); rompe el programa
stack1.add(2);
stack1.add(3);
stack1.add(4);
console.log(stack1); // Stack { array: [ 2, 3, 4 ] }
stack1.remove();
console.log(stack1); // Stack { array: [ 2, 3 ] }


//QUEUES O COLAS
// este ejercicio se encuentra en la homework
```