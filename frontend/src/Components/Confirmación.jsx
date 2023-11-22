/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function Confirmacion({ onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // Llamar a onClose después de 2 segundos
        }, 2000);

        return () => clearTimeout(timer); // Limpieza en caso de que el componente se desmonte antes
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="max-w-md py-4 px-6 shadow-2xl shadow-green-800 rounded-lg bg-green-600">
                <div className="flex flex-col items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl text-white font-semibold">Éxito</h3>
                    <p className="text-white">Se ha eliminado el platillo de favoritos.</p>
                </div>
            </div>
        </div>
    );
}

export default Confirmacion;
