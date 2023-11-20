import React, { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";

const Header = ({ onSearch }) => {
  const [localBusqueda, setLocalBusqueda] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(localBusqueda); // Actualiza el estado de búsqueda en el componente padre
  };

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
          <p className="text-gray-500">Noviembre 2023</p>
        </div>
        <form onSubmit={handleSearch}>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
              value={localBusqueda}
              onChange={(e) => setLocalBusqueda(e.target.value)}
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a href="/Comida_Niños" className="py-2 pr-4 hover:text-red-500">Niños</a>
        <a href="/Comida_Adolescentes" className="py-2 pr-4 hover:text-red-500">Adolescentes</a>
        <a href="/Comida_Adultos" className="py-2 pr-4 hover:text-red-500">Adultos</a>
        <a href="/Comida_Tercera_Edad" className="py-2 hover:text-red-500">Personas de la tercera Edad</a>
      </nav>
    </header>
  );
};

export default Header;
