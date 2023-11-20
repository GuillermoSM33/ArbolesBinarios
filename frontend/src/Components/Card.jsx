/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { RiHeart3Line, RiHeartFill } from 'react-icons/ri'; // Importamos ambos íconos para los estados de favorito/no favorito

const Card = ({ key, img, name, description, category, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        alt="Dish"
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{key}</p>
      <p className="text-xl">{name}</p>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">{category}</p>
      {/* Botón de favorito que cambia de ícono basado en si es favorito o no */}
      <button onClick={onToggleFavorite} className="text-3xl">
        {isFavorite ? (
          <RiHeartFill className="text-red-500" />
        ) : (
          <RiHeart3Line className="text-red-500" />
        )}
      </button>
    </div>
  );
};

export default Card;
