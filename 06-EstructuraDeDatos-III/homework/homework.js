'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {  
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
   if (value <= this.value) {
     if (!this.left) this.left = new BinarySearchTree(value);
     else this.left.insert(value);
   } else if (value > this.value) {
     if (!this.right) this.right = new BinarySearchTree(value);
     else this.right.insert(value);
   }
 };
 
 BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) return true;
   if (value < this.value) {
     if (!this.left) return false;
     else return this.left.contains(value);
   } else if (value > this.value) {
     if (!this.right) return false;
     else return this.right.contains(value);
   }
 };
 
 BinarySearchTree.prototype.size = function () {
     let size = 1;
     if (this.left) size += this.left.size();
     if (this.right) size += this.right.size();
     return size;
 };
 
 BinarySearchTree.prototype.depthFirstForEach = function (call, order = 'in-order') {
     if (order === 'pre-order') call(this.value);
     if (this.left) this.left.depthFirstForEach(call, order);
     if (order === 'in-order') call(this.value);
     if (this.right) this.right.depthFirstForEach(call, order);
     if (order === 'post-order') call(this.value);
 }

 BinarySearchTree.prototype.breadthFirstForEach = function (call, queue = []) {
   if(this.left) queue.push(this.left)
   if (this.right) queue.push(this.right)
   call(this.value)
   if (queue.length) queue.shift().breadthFirstForEach(call, queue)

 }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
