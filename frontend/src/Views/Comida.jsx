/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    RiMenu3Fill,
    RiUser3Line,
    RiAddLine,
    RiPieChartLine,
    RiCloseLine,
    RiArrowDownSLine,
} from 'react-icons/ri';
// Components
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Card from '../Components/Card';
import { gymApi } from '../api/gymApi';

const Comida = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [platillos, setPlatillos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false);
    };

    const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
    };

    useEffect(() => {
        const fetchPlatillos = async () => {
            try {
                const response = await gymApi.get('/platillos'); // Asegúrate de cambiar esta URL por la correcta de tu API
                setPlatillos(response.data);
            } catch (error) {
                console.error('Error al obtener los platillos', error);
            }
        };

        fetchPlatillos();
    }, []);

    const toggleFavorite = (platillo) => {
        setFavoritos(prevFavoritos => {
            // Verifica si el platillo ya está en favoritos
            const isFavorite = prevFavoritos.some(fav => fav.id === platillo.id);

            if (isFavorite) {
                // Si ya es favorito, lo quita de la lista
                return prevFavoritos.filter(fav => fav.id !== platillo.id);
            } else {
                // Si no es favorito, lo añade a la lista
                return [...prevFavoritos, platillo];
            }
        });
    };


    return (
        <div className="bg-[#262837] w-full min-h-screen h-full">
            <Sidebar showMenu={showMenu} />
            <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
                <button className="p-2">
                    <RiUser3Line />
                </button>
                <button className="p-2">
                    <RiAddLine />
                </button>
                <button onClick={toggleOrders} className="p-2">
                    <RiPieChartLine />
                </button>
                <button onClick={toggleMenu} className="text-white p-2">
                    {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
                </button>
            </nav>
            <main className="lg:pl-32 pb-20">
                <div className="md:p-8 p-4">
                    <Header />
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-xl text-gray-300">Choose Dishes</h2>
                        <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                            <RiArrowDownSLine /> Dine in
                        </button>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                        {platillos.map((platillo) => {
                            const isFavorite = favoritos.some(fav => fav.id === platillo.id);

                            return (
                                <Card
                                    key={platillo.id}
                                    img={platillo.img}
                                    name={platillo.nombre}
                                    description={platillo.descriptionPlatillo}
                                    category={platillo.categoria}
                                    isFavorite={isFavorite}
                                    onToggleFavorite={() => toggleFavorite(platillo)}
                                />
                            );
                        })}

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Comida;