/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';

// Components
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Confirmacion from '../Components/Confirmación';
import { UserContext } from '../Components/UserContext';
import { gymApi } from '../api/gymApi';

const Favoritos = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [favoritos, setFavoritos] = useState([]);
    const [showConfirmacion, setShowConfirmacion] = useState(false);
    const { usuario } = useContext(UserContext);

    useEffect(() => {
        if (usuario && usuario.id) {
            gymApi.get(`/obtenerFavoritos/${usuario.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(respuesta => {
                if (respuesta.data.Estatus === 'Exitoso') {
                    setFavoritos(respuesta.data.Resultado);
                }
            })
            .catch(error => console.log("Error al obtener favoritos: ", error));
        }
    }, [usuario]);

    const eliminarFavorito = (platilloId) => {
        gymApi.delete('/favoritos', {
            data: { usuario_id: usuario.id, platillo_id: platilloId },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(respuesta => {
            if (respuesta.data.message === 'Eliminado de favoritos correctamente') {
                setFavoritos(favoritos.filter(fav => fav.id !== platilloId));
                mostrarConfirmacion();
            }
        })
        .catch(error => console.log("Error al eliminar favorito: ", error));
    };

    const mostrarConfirmacion = () => setShowConfirmacion(true);
    const ocultarConfirmacion = () => setShowConfirmacion(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div className="bg-[#262837] w-full min-h-screen h-full">
            <Sidebar showMenu={showMenu} />
            <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
                <button onClick={toggleMenu} className="text-white p-2">
                    {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
                </button>
            </nav>
            <main className="lg:pl-32 pb-20">
                <div className="md:p-8 p-4">
                    <Header />
                    <div className="mb-16">
                        <h2 className="text-xl text-gray-300">Tus Platillos Favoritos</h2>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                        {favoritos.map((platillo) => (
                            <Card
                                key={platillo.id}
                                img={platillo.img}
                                name={platillo.nombre}
                                description={platillo.descriptionPlatillo}
                                category={platillo.categoria}
                                isFavorite={true}
                                onToggleFavorite={() => eliminarFavorito(platillo.id)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            {showConfirmacion && <Confirmacion onClose={ocultarConfirmacion} />}
        </div>
    );
};

export default Favoritos;
