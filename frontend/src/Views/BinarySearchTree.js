/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
// Clase o función base para el árbol binario
export default function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype = {
    // Constructor
    constructor: BinarySearchTree,

    // Función para añadir un nodo al árbol
    add: function(value) {
        var node = {
            value: value,
            left: null,
            right: null
        };

        var current;
        if (this.root === null) {
            this.root = node;
        } else {
            current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    },

    // Función para determinar si existe un nodo en el árbol
    contains: function(value) {
        var found = false;
        var current = this.root;

        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    },

    // Función que realiza el recorrido del árbol en orden
    traverse: function(process) {
        function inOrder(node) {
            if (node) {
                if (node.left !== null) {
                    inOrder(node.left);
                }
                process.call(this, node);
                if (node.right !== null) {
                    inOrder(node.right);
                }
            }
        }
        inOrder(this.root);
    },

    // Función que elimina un nodo del árbol binario
    remove: function(value) {
        var found = false,
            parent = null,
            current = this.root,
            childCount,
            replacement,
            replacementParent;

        while (!found && current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                found = true;
            }
        }

        if (found) {
            childCount = 0;
            if (current.left !== null) childCount++;
            if (current.right !== null) childCount++;

            if (current === this.root) {
                switch (childCount) {
                    case 0:
                        this.root = null;
                        break;
                    case 1:
                        if (current.right === null) {
                            this.root = current.left;
                        } else {
                            this.root = current.right;
                        }
                        break;
                    case 2:
                        replacement = this.root.left;
                        replacementParent = null;
                        while (replacement.right !== null) {
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        if (replacementParent !== null) {
                            replacementParent.right = replacement.left;
                            replacement.right = this.root.right;
                            replacement.left = this.root.left;
                        } else {
                            replacement.right = this.root.right;
                        }
                        this.root = replacement;
                        break;
                }
            } else {
                switch (childCount) {
                    case 0:
                        if (current.value < parent.value) {
                            parent.left = null;
                        } else {
                            parent.right = null;
                        }
                        break;
                    case 1:
                        if (current.left === null) {
                            if (current.value < parent.value) {
                                parent.left = current.right;
                            } else {
                                parent.right = current.right;
                            }
                        } else {
                            if (current.value < parent.value) {
                                parent.left = current.left;
                            } else {
                                parent.right = current.left;
                            }
                        }
                        break;
                    case 2:
                        replacement = current.left;
                        replacementParent = current;

                        while (replacement.right !== null) {
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        if (replacementParent !== current) {
                            replacementParent.right = replacement.left;
                            replacement.left = current.left;
                        }
                        replacement.right = current.right;

                        if (current.value < parent.value) {
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }
                        break;
                }
            }
        }
    },

    // Calcula el tamaño de un árbol binario
    size: function() {
        var length = 0;
        this.traverse(function(node) {
            length++;
        });
        return length;
    },

    // Vacía el contenido del árbol binario en un arreglo
    toArray: function() {
        var result = [];
        this.traverse(function(node) {
            result.push(node.value);
        });
        return result;
    },

    // Convierte el arreglo con los nodos del árbol en string
    toString: function() {
        return this.toArray().toString();
    }
};

// Creación del árbol y prueba de sus funciones
var tree = new BinarySearchTree();
console.log("Añadiendo 4 valores al árbol binario: 10, 5, 15, 25 (en desorden)");
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(25);
console.log("Existe el valor 15 en el árbol?: " + tree.contains(15));
console.log("Tamaño del árbol: " + tree.size());
console.log("Imprimir el recorrido del árbol en orden: ");
tree.traverse(function(node) {
    console.log(node.value);
});
console.log("Elimina el nodo 10 del árbol (el nodo raíz)");
tree.remove(10);
console.log("Tamaño del árbol: " + tree.size());
console.log("Imprimir el recorrido del árbol en orden con un arreglo pila: ");
console.log(tree.toArray());
console.log("Imprimir el recorrido del árbol en orden en formato string plano: ");
console.log(tree.toString());
