/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card';
import { UserContext } from '../Components/UserContext';

const Favoritos = () => {
    const [platillos, setPlatillos] = useState([]);

    useEffect(() => {
        // Hacer la petición para obtener platillos de la categoría 'Adultos'
        axios.get('http://localhost:8081/obtenerPlatillos/Adultos')
            .then(respuesta => {
                if (respuesta.data.Estatus === 'Exitoso') {
                    setPlatillos(respuesta.data.Resultado);
                } else {
                    console.log("Error en la respuesta");
                }
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            {platillos.map((platillo) => {
                return (
                    <Card
                        key={platillo.id} // Cambiado a platillo.id para evitar duplicados
                        img={platillo.img}
                        name={platillo.nombre}
                        description={platillo.descriptionPlatillo}
                        category={platillo.categoria}
                    />
                );
            })}
        </>
    );
};

export default Favoritos;
