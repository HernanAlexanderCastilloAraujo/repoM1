```javascript



```

THIS:
Un objeto tiene principalmente dos cosas, propiedades y métodos...
Al crear una función constructora, las propiedades son las caracteristicas que van a tener la instancias creadas a partir de la clase, los métodos son las funciones que pueden hacer esas instancias... 
Ahora, el this hace referencia al objeto que está ejecutando un método...

EJEMPLO

```javascript
function Persona(nombre){
    this.nombre = nombre
}
Persona.prototype.saludar = function(){
    console.log("Hola mi nombre es " + this.nombre)
}

var newPersona = new Persona("Alex")

newPersona.saludar() // en este caso el this apunta a newPersona, quien es el que está ejecutando el método saludar, recordar que newPersona es una instancia de Persona, por lo que tiene las propiedades y métodos de esta clase constructora....
Hola mi nombre es Alex



let miFuncion = newPersona.saludar // estoy guardando el método literalmente...
console.log(miFuncion) // [Function (anonymous)]

miFuncion() //Hola mi nombre es undefined
// en este caso apunta a undefined porque quien está ejecutando la funcion es la variable miFuncion que está en el contexto global, osea que el this apunta a este contexto
```

el this tiene ciertos problemas, como por ejemplo  

```javascript
function Persona(nombre){
    this.nombre = nombre
    this.amigos = ["Santi", "Sara"]
}
Persona.prototype.saludar = function(){
    console.log("Hola mi nombre es " + this.nombre)
}
Persona.prototype.mostrarAmigos = function(){
    this.amigos.forEach(function(amigo){
        console.log(amigo + " es amigo de " + this.nombre)
    })
}
var newPersona = new Persona("Alex")
//newPersona.saludar() 
let miFuncion = newPersona.saludar
//console.log(miFuncion) 
//miFuncion() 
newPersona.mostrarAmigos() // se supone que se quiere mostrar un console log con el nombre de cada amigo, sin embargo, en el forEach se crea una funcion por cada posicion del array, por lo que el this se pierde, para solucionar esto se debe realizar el ejercicio con una funcion flecha, ya que está no crea un nuevo contexto...
 // tambien se puede guardar this en la funcion método
 ```

 En conclusion, hay que tener cuidado con el this cuando se creen nuevos contextos...

//************************************************** */

CLOSURES
Se tiene una funcion, que retorna una funcion, la funcion retorna utiliza una variable de un contexto mayor...

```javascript
function crearSaludo(saludo){
    return function saludar(nombre){
        console.log(saludo, nombre)
    }
}
let saludarHola = crearSaludo("Hola")
saludarHola("Alex")
// Hola Alex

// para ejecutar la funcion saludar que está dentro de la funcion crear saludo, debemos pasarle dos datos (el saludo y el nombre), esto lo podemos hacer de dos maneras, ejecutando la funcion crearSaludo, pasando el "saludo", y guardandolo en una variable, posteriormente, ejecutar esta variable con el "nombre"... y la otra forma es ejecutar doblemente la funcion crearSaludo, primero con el "saludo" y luego con el "nombre" como se hace acontinuación...
crearSaludo("Adios")("Alex") 
// Adios Alex
// si se ejecutara una vez la funcion la crearSaludo, no se estaria ejecutando la funcion saludar que está dentro de crearSaludo... 
```
las closures sirven para guardar variables de un contexto superior aun cuando se destruye dicho contexto....


otro EJEMPLO 
```javascript
function crearContador(){
    var count = 0
    return function(){
        count++
        return count
        
    }
}

let contador1 = crearContador()

console.log(contador1())
console.log(contador1())

// al crear una variable (contador1) con la funcion retornada (closure), esta funcion recibe la variable count del contexto superior, la variable se mantiene... por ejemplo, en este ejercicio, count seguirá aumentando cada vez que se ejecute la funcion contador1, en conclusion, count tiene memoria...

```
la funcion superior le da a la funcion que retorna, la variable, y NO el valor...



//************************************************************* *//

BIND, CALL and APPLY

```javascript

let persona = {
    nombre: "Alex",
    apellido: "Diaz",
}

let logNombre = function(){
    console.log(this.nombre)
}

logNombre.bind(persona)() // Alex 
let logNombrePersona = logNombre.bind(persona)

logNombrePersona() // Alex

//recordar que el método ".bind" debe ser doblemente ejecutado para que se ejecute la funcion, y con bind le indicamos a la funcion donde queremos que apunte el this

//CALL
loggNombre.call(persona) // Alex
// el metodo call, invoca la funcion, osa que la ejecuta, no devuelve una funcion como bind

let edad = function(edad){
    console.log(this.nombre + " tiene " + edad + " años")
}

edad.call(persona, 23) // Alex tiene 23 años
// la funcion puede, además de marcar a quien apunta, recibir parámetros...

//APLLY es igual a call, solo que recibe los parámetros para la funcion en un arrelgo...

let pais = function (pais, ciudad){
    console.log(this.nombre + " vive en " + pais + ", en la ciudad de "+ ciudad)
}
pais.apply(persona,["Colombia", "Cali"]) //Alex vive en Colombia, en la ciudad de Cali
 
// Apply se aplica en el caso de que los parámetros estén guardados en un array.....

let parametros = ["Argentina", "Buenos Aires"]
pais.apply(persona, parametros) // Alex vive en Argentina, en la ciudad de Buenos Aires....

```