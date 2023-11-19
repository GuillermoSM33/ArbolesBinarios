/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'; // Importa jwt-decode
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

function Comida() {

    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [favorites, setFavorites] = useState(new Set()); // Estado para controlar los favoritos

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false);
      };
    
      const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
      };

    // Decodifica el token para obtener el ID del usuario
    const token = localStorage.getItem('token'); // Asegúrate de que el token se almacene aquí después del login
    const decodedToken = token ? jwt_decode(token) : null;
    const usuario_id = decodedToken ? decodedToken.id : null;

    // Lista de platillos (debería venir del backend en una aplicación real)
    const dishes = [
        { id: 1, nombre: 'Platillo 1', img: 'ruta-imagen-1.jpg', descriptionPlatillo: 'Descripción del Platillo 1', categoria: 'Niños' },
        { id: 2, nombre: 'Platillo 2', img: 'ruta-imagen-2.jpg', descriptionPlatillo: 'Descripción del Platillo 2', categoria: 'Adultos' },
        // ... otros platillos ...
    ];

    const toggleFavorite = async (dishId) => {
        const isFavorite = favorites.has(dishId);
        const method = isFavorite ? 'DELETE' : 'POST';
        const url = '/api/favoritos'; // URL para agregar/quitar favoritos

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    // Aquí incluirías cualquier header de autenticación si es necesario
                },
                body: JSON.stringify({ usuario_id, platillo_id: dishId })
            });

            if (response.ok) {
                setFavorites((prevFavorites) => {
                    const newFavorites = new Set(prevFavorites);
                    if (isFavorite) {
                        newFavorites.delete(dishId);
                    } else {
                        newFavorites.add(dishId);
                    }
                    return newFavorites;
                });
            } else {
                // Manejo de errores
                console.error('Error al actualizar favoritos');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    useEffect(() => {
        const fetchFavorites = async () => {
          if (usuario_id) {
            try {
              const response = await fetch(`/api/favoritos/${usuario_id}`);
              if (response.ok) {
                const data = await response.json();
                setFavorites(new Set(data.map(item => item.platillo_id)));
              } else {
                console.error('Error al cargar los favoritos');
              }
            } catch (error) {
              console.error('Error en la solicitud:', error);
            }
          }
        };
      
        fetchFavorites();
      }, [usuario_id]); // Dependencia en usuario_id para recargar cuando cambie

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
                        {dishes.map((dish) => (
                            <Card
                                key={dish.id}
                                img={dish.img}
                                description={dish.nombre}
                                detail={dish.descriptionPlatillo}
                                isFavorite={favorites.has(dish.id)}
                                onToggleFavorite={() => toggleFavorite(dish.id)}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Comida;
