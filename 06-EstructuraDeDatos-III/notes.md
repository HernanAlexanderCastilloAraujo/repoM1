```javascript


```


BINARY TREE
Al igual que en una lista enlazada, en un arbol binario se tiene nodos... 
Pero a diferencia que en las listas enlazadas, en los arboles  se presentan dos descendientes (dos "next").... Cada nodo tiene un left y un right..
Nodos del mismo padre, se les denomina "nodos hermanos"...
Otra diferencia con las listas enlazadas es que para crear una LI, se necesitaba dos constructores, uno de lista, y uno de nodo, en cambio, en los arboles binarios todos los nodos son instancias de un mismo constructor (arbol)....
Un ejemplo de arbol es una estructura de HTML, de la etiqueta html se desencadenan el head y el body...

Existen arboles binarios de busqueda, que quiere decir que sus valores están ordenados, por ejemplo, valores mayores a la derecha y menores a la izquierda.

también existen arboles autobalanceados, su requisito principal es que no haya más de un nivel de diferencia entre rammas.... (leer sobre este tema para entrevistas)

```javascript
function BinarySearchTree(value) { // constructor de arboles binarios
  this.value = value; // valor que se guarda en el nodo
  this.left = null;  // nodo izquierdo
  this.right = null; //nodo derecho
}

BinarySearchTree.prototype.insert = function (value) { // metodo para insertar un nuevo nodo en el arbol, recibe un valor y lo inserta en el lugar correspondiente 
  if (value <= this.value) {
    if (!this.left) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function (value) { // metodo para buscar un valor en el arbol, recibe un valor y retorna true o false si lo encuentra o no
  if (value === this.value) return true; 
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BinarySearchTree.prototype.size = function () { // meotodo para contar la cantidad de nodos que tiene el arbol, retorna la cantidad de nodos
    let size = 1;
    if (this.left) size += this.left.size();
    if (this.right) size += this.right.size();
    return size;
};

BinarySearchTree.prototype.depthFirstForEach = function (call, order = 'in-order') { // metodo para recorrer el arbol en profundidad, recibe una funcion y un orden, por defecto es in-order, si es in-order el metodo recorre primero el nodo izquierdo, luego ejecuta el callback con el valor del nodo padre, luego el nodo derecho, si es pre-order primero ejecuta el callback con el valor del nodo padre, luego el nodo izquierdo y luego el nodo derecho, si es post-order primero el nodo izquierdo, luego el nodo derecho y luego el callback con el valor del nodo padre
    if (order === 'pre-order') call(this.value);
    if (this.left) this.left.depthFirstForEach(call, order);
    if (order === 'in-order') call(this.value);
    if (this.right) this.right.depthFirstForEach(call, order);
    if (order === 'post-order') call(this.value);
}

BinarySearchTree.prototype.breadthFirstForEach = function (call, queue = []) { // metodo pra recorrer el arbol en orden por niveles, recibe una funcion y una cola que por defecto está vacia, se guardan los nodos hijos en la cola y se ejecuta el callback con el valor del nodo padre, luego se saca el primer elemento de la cola y se repite el proceso hasta que la cola este vacia 
    if(this.left) queue.push(this.left)
    if (this.right) queue.push(this.right)
    call(this.value)
    if (queue.length) queue.shift().breadthFirstForEach(call, queue)
 
  }

```
