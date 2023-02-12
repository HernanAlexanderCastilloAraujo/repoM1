```javascript


```

LISTAS ENLAZADAS
Una lista enlazada debe tener un "head", la lista en sí es un objeto y esta se compone con nodos, el head también va a ser un nodo... Cada nodo tiene la referencia que dirige al nodo siguiente, por lo que si se pierde un nodo y no se guarda la referencia al siguiente nodo, todos los nodos posteriores se pierden......
En cada nodo se guarda un valor, que es la data que se quiere ordenar...

```javascript

function LinkedList() {
  // funcion constructora de listas enlazadas
  this.head = null; // el primer nodo de la lista
}

function Node(data) {
  // funcion constructora de nodos
  this.data = data; // el dato que contiene el nodo
  this.next = null; // el siguiente nodo de la lista
}

LinkedList.prototype.size = function () {
  // metodo para saber el tamaño de la lista
  let count = 0; // contador de nodos
  if (this.head) { // si hay un nodo en la lista
    count++; // sumar uno al contador
    let current = this.head; 
    while (current.next) { // mientras haya un nodo siguiente
      count++; // sumar uno al contador
      current = current.next; // avanzar al siguiente nodo
    }
  }
  return count; // retornar el tamaño de la lista
};

LinkedList.prototype.addLast = function (data) {
  // metodo para agregar al final de la lista
  let node = new Node(data); // crear un nodo con el dato data
  if (!this.head) { 
    this.head = node; // si no hay nodos en la lista, el nodo creado es el primero
  } else { // si ya hay nodos en la lista
    let current = this.head;
    while (current.next) { // mientras haya un nodo siguiente
      current = current.next; // avanzar al siguiente nodo
    }
    current.next = node; // cuando no haya un nodo siguiente, se crea el nodo en el next del ultimo nodo
  }
};

LinkedList.prototype.addFirst = function (data) {
  // metodo para agregar al principio de la lista
  let node = new Node(data); // crear un nodo con el dato data
  if (!this.head) {
    this.head = node; // si no hay nodos en la lista, el nodo creado es el primero
  } else {
    // si ya hay nodos en la lista, el nodo creado pasa a ser el primero y el que estaba primero pasa a ser el segundo
    node.next = this.head; 
    this.head = node; 
  }
};

LinkedList.prototype.add = function (data, index) {
  // metodo para agregar en cualquier lugar de la lista, en la posicion index
  if (this.size() + 1 < index) { // si la posicion es mayor al tamaño de la lista + 1 no se puede agregar el dato
    console.log("no se puede agregar en esa posicion");
  } else {
    let node = new Node(data);
    let count = 1;
    if (index === 1) { // si la posicion es 1, se agrega al principio
      this.addFirst(data);
    } else if (index === this.size() + 1) { // si la posicion es el tamaño de la lista + 1, se agrega al final
      this.addLast(data);
    } else { // si la posicion es entre 1 y el tamaño de la lista + 1, se agrega en la posicion index
      let current = this.head;
      while (count < index - 1) { // se recorre la lista hasta la posicion index - 1 para agregar el nodo en la posicion siguiente la que seria index
        current = current.next;
        count++;
      }
      // el nodo creado pasa a ser el siguiente del nodo que esta en la posicion index - 1 y el nodo que estaba en la posicion index pasa a ser el siguiente del nodo creado
      node.next = current.next;  
      current.next = node;
    }
  }
};

LinkedList.prototype.removeLast = function () {
  // metodo para quitar el último nodo de la lista
  if (!this.head) { // si no hay nodos en la lista no se puede quitar el ultimo nodo
    return null;
  } else if (!this.head.next) { // si solo hay un nodo en la lista, se quita el nodo y la lista queda vacia
    let value = this.head.data;
    this.head = null;
    return value;
  } else { // si hay mas de un nodo en la lista, se recorre la lista hasta el ultimo nodo y se quita el ultimo nodo de la lista y se retorna el dato que contenia
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    let value = current.next.data;
    current.next = null;
    return value;
  }
};

LinkedList.prototype.removeFirst = function () {
  // metodo para quitar un nodo al principio de la lista
  if (!this.head) { // si no hay nodos en la lista no se puede quitar el primer nodo
    return null;
  } else if (!this.head.next) { // si solo hay un nodo en la lista, se quita el nodo y la lista queda vacia y se retorna el dato que contenia
    let value = this.head.data;
    this.head = null;
    return value;
  } else { // si hay mas de un nodo en la lista, se quita el primer nodo y se retorna el dato que contenia y el segundo nodo pasa a ser el primero
    let value = this.head.data;
    this.head = this.head.next;
    return value;
  }
};

LinkedList.prototype.remove = function (index) {
  // metodo para quitar cualquier nodo de la lista, en la posicion index
  if (this.size() < index) { // si la posicion es mayor al tamaño de la lista no se puede quitar el dato
    console.log("no se puede quitar en esa posicion");
  } else { 
    let count = 1;
    if (index === 1) { // si la posicion es 1, se quita el primer nodo
      this.removeFirst();
    } else if (index === this.size()) { // si la posicion es el tamaño de la lista, se quita el ultimo nodo
      this.removeLast();
    } else { // si la posicion es entre 1 y el tamaño de la lista, se quita el nodo en la posicion index
      let current = this.head;
      while (count < index - 1) { // se recorre la lista hasta la posicion index - 1 para quitar el nodo en la posicion siguiente la que seria index
        current = current.next;
        count++;
      }
      let value = current.next.data; // se guarda el dato que contenia el nodo que se va a quitar
      current.next = current.next.next; // el nodo que esta en la posicion index + 1 pasa a ser el siguiente del nodo que esta en la posicion index - 1
      return value;
    }
  }
};

LinkedList.prototype.search = function (value) {
  // metodo para buscar un nodo en la lista y devolverlo si lo encuentra, si es una funcion, se ejecuta la funcion con el valor del nodo y si es true, devuelve el nodo, si no, devuelve null
  let current = this.head;
  while (current) {
    if (typeof value === "function") {
      if (value(current.value)) {
        return current.value;
      }
    } else {
      if (current.value === value) {
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
};

let list = new LinkedList(); // creando una nueva lista

// agregando nodos a la lista
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);

console.log(list); //{1} -> {2} -> {3} -> {4} -> null

console.log(list.search(4)); // 4

console.log(list.search(5)); // null

console.log(list.size()); // 4

list.addLast(5); // agregando un nodo al final de la lista
console.log(list.size()); // 5

list.removeLast(); // quitando el ultimo nodo de la lista
console.log(list.size()); // 4

list.addFirst(9); // agregando un nodo al principio de la lista
console.log(list); // {9} -> {1} -> {2} -> {3} -> {4} -> null
console.log(list.size()); // 5

list.add(10, 7); // no se puede agregar en esa posicion

list.add(11, 1); // agregando un nodo en la posicion 1 (primera posicion)
console.log(list); // {11} -> {9} -> {1} -> {2} -> {3} -> {4} -> null

list.add(12, 7); // agregando un nodo en la posicion 7 (ultima posicion)
console.log(list.search(12)); // 12
console.log(list.size()); // 7

list.add(13, 2); // agregando un nodo en la posicion 2
console.log(list.search(13)); // 13 
console.log(list.size()); // 8
console.log(list); // {11} -> {13} -> {9} -> {1} -> {2} -> {3} -> {4} -> {12} -> null

list.removeFirst(); // quitando el primer nodo de la lista
console.log(list); // {13} -> {9} -> {1} -> {2} -> {3} -> {4} -> {12} -> null

list.remove(2); // quitando el nodo en la posicion 2
console.log(list); // {13} -> {1} -> {2} -> {3} -> {4} -> {12} -> null

```

HASH TABLE: 
la hash table es una estructura de datos que recibe un clave encriptada de parte de una funcion hasheadora, a la funcion hasheadora se le pasa un clave, esta lo hashea (lo transforma) y le pasa el valor a la hash table en forma de indice y esta guarda un valor en esa posicion... cabe recalcar que puede haber colisiones, porque que se puede manejar estas colisiones, con objetos o arrays anidados...

```javascript

function HashTable() {
  //constructor las tablas hash
  this.buckets = [];
  this.numBuckets = 35;
  this.size = 0;
}

HashTable.prototype.hash = function (key) {
  //funcion hash
  let total = 0;
  if (!typeof key === "string") {
    throw Error("key must be a string");
  }
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  //funcion set, recibe una clave y un valor, pasa la clave por la funcion hash y guarda el valor en el bucket correspondiente, segun el dato entregado por la funcion hash, si el bucket esta vacio, crea un objeto vacio y guarda el valor en el bucket con la clave correspondiente, si el bucket no esta vacio, guarda el valor en el bucket con la clave correspondiente... envía un error si la clave no es un string....
  if (typeof key !== "string") {
    throw new TypeError("key must be a string");
  } else {
    let index = this.hash(key);
    if (this.buckets[index] === undefined) {
      this.buckets[index] = {};
    }
    this.buckets[index][key] = value;
  }
};

HashTable.prototype.get = function (key) {
  //funcion get, recibe una clave y busca el valor que le corresponde en el bucket correcto de la tabla, si el bucket esta vacio, envia false, si el bucket no esta vacio, busca el valor en el bucket con la clave correspondiente... envía un error si la clave no es un string....
  if (typeof key !== "string") {
    throw new TypeError("key must be a string");
  }
  let index = this.hash(key);
  return this.buckets[index][key];
};
HashTable.prototype.hasKey = function (key) {
  //funcion hasKey, recibe una clave y consulta si hay algo almacenado en la tabla con esa clave, si el backet no existe, envia false, si el bucket existe, busca la clave en el bucket y envia true si la encuentra, si no la encuentra, envia false... envía un error si la clave no es un string....
  if (typeof key !== "string") {
    throw new TypeError("key must be a string");

}
// Forma de H
  // let index = this.hash(key);
  // return this.buckets[index].hasOwnProperty(key);

  //mejor Forma
    if (typeof key !== "string") {
    throw new TypeError("key must be a string");
  }
 
  return !!this.get(key);
};
```


