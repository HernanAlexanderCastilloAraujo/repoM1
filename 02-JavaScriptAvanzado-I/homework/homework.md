# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); //8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10 
console.log(x);// 1
```

```javascript
console.log(bar); // undefined

//console.log(baz); // not defined
foo();
function foo() {
   console.log('Hola!'); // Hola! -- solo entra si no se rompe el codigo con baz not defined
}
var bar = 1;
baz = 2
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);// Franco porque se crea una nueva var en el if, que tiene alcance de contexto de ejecucion...
```

```javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tonys
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 6 / 3 = 2
"2" * "3" // 2 * 3 = 6
4 + 5 + "px" // 4 + 5 = 9 -- 9 + "px" = "9px"
"$" + 4 + 5 // "$" + 4 = "$4" -- "$4" + 5 = "$45"
"4" - 2 // 4 - 2 = 2
"4px" - 2 // "4px" - 2 = NaN
7 / 0 // 7 / 0 = Infinity
{}[0] = // {}[0] = undefined
parseInt("09") // 9
5 && 2 // 5 == true && 2 == true = 2
2 && 5 // 2 == true && 5 == true = 5
5 || 0 // 5 == true = 5 
0 || 5 // 0 == false || 5 == true = 5
[3]+[3]-[10] //"3" + "3" = "33" -- "33" - [10] = 23
3>2>1 // 3 > 2 = triue -- true > 1 = false
[] == ![] // null == false -- false  == false = true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
// en el primer console log la variable ha sido creada gracias al hosting pero aun no ha sido definida, en el segundo console log la funcion ha sido creada gracias al hosting......
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false)); //undefined
console.log(getFood(true)); // Friskies

// el primer console log muestra undefined porque se volvió a crear la variable snack dentro de la función pero no se le dió valor al no entrar al if, si snack estuviera declarada con let, "return snack" de la funcion retornaría "Meow Mix" 
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa
console.log(obj.prop.getFullname); //function
var test = obj.prop.getFullname; //
console.log(test()); // undefined porque obj.prop.getFullName no retorna nada ya que no se está ejecutando la funcion
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //1
   setTimeout(function () {
      console.log(2); //4 
   }, 1000);
   setTimeout(function () {
      console.log(3); //3
   }, 0);
   console.log(4); //2
}

printing();
```
