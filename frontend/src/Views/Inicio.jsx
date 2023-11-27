import React, { useState } from 'react';
import BinarySearchTree from './BinarySearchTree';
import BinaryTreeView from './BinaryTreeView';
import swal from 'sweetalert2';

function Inicio() {
    const [tree] = useState(new BinarySearchTree());
    const [addValue, setAddValue] = useState('');
    const [removeValue, setRemoveValue] = useState('');
    const [output, setOutput] = useState('');
    

    const convertToD3Format = (node) => {
        if (!node) return null;
        let newNode = { name: node.value };
        if (node.left || node.right) {
            newNode.children = [];
            if (node.left) newNode.children.push(convertToD3Format(node.left));
            if (node.right) newNode.children.push(convertToD3Format(node.right));
        }
        return newNode;
    };

    const handleAdd = () => {
        if (!addValue.trim()) {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes de llenar el input para añadir un valor!",
            });
            return;
        }
        tree.add(parseInt(addValue, 10));
        setAddValue('');
        setOutput(`Valor añadido: ${addValue}`);
    };

    const handleRemove = () => {
        if (!removeValue.trim()) {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes de llenar el input para eliminar un valor!",
            });
            return;
        }
        tree.remove(parseInt(removeValue, 10));
        setRemoveValue('');
        setOutput(`Valor eliminado: ${removeValue}`);
    };

    const handleContains = () => {
        const found = tree.contains(parseInt(addValue, 10));
        setOutput(found ? 'Valor encontrado' : 'Valor no encontrado');
    };

    const handleSize = () => {
        const size = tree.size();
        setOutput('Tamaño del árbol: ' + size);
    };

    const handleTraverse = () => {
        const arr = tree.toArray();
        setOutput('Recorrido del árbol: ' + arr.join(', '));
    };

    return (
        <>

            {/*Barra de navegación*/}

            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="/arbol.png"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Arboles Binarios
                        </span>
                    </a>
                </div>
            </nav>


            <div className="px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
                {/* Input para añadir valores */}
                <label className="flex w-full relative">
                    <input
                        type="text"
                        value={addValue}
                        onChange={(e) => setAddValue(e.target.value)}
                        className="bg-transparent ring-1 ring-gray-300 w-full h-10 rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
                        required
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 left-3 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold transition-all bg-white px-2 cursor-text peer-valid:top-0 peer-valid:text-xs peer-valid:font-semibold text-gray-500 flex items-center gap-2">
                        Añadir Valor <span className="text-red-500">*</span>
                    </span>
                </label>
                <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Añadir</button>

                {/* Input para eliminar valores */}
                <label className="flex w-full relative">
                    <input
                        type="text"
                        value={removeValue}
                        onChange={(e) => setRemoveValue(e.target.value)}
                        className="bg-transparent ring-1 ring-gray-300 w-full h-10 rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
                        required
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 left-3 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold transition-all bg-white px-2 cursor-text peer-valid:top-0 peer-valid:text-xs peer-valid:font-semibold text-gray-500 flex items-center gap-2">
                        Eliminar Valor <span className="text-red-500">*</span>
                    </span>
                </label>
                <button onClick={handleRemove} className="px-4 py-2 bg-red-500 text-white rounded">Eliminar</button>
            </div>

            {/* Botones para otras operaciones */}
            <div className="flex space-x-2 px-4 mt-4">
                <button onClick={handleContains} className="px-4 py-2 bg-green-500 text-white rounded">Buscar</button>
                <button onClick={handleSize} className="px-4 py-2 bg-yellow-500 text-white rounded">Tamaño</button>
                <button onClick={handleTraverse} className="px-4 py-2 bg-purple-500 text-white rounded">Recorrer</button>
            </div>

            {/* Salida */}
            <div className="mt-4 p-2 bg-gray-200 rounded mx-4">
                {output}
            </div>

            <BinaryTreeView treeData={convertToD3Format(tree.root)} />

            {/* FOOTER */}


            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Garcia.</a> All Rights Reserved for TEC. Garcia Canul Guillermo De Jesus.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>

        </>
    );
}

export default Inicio;
