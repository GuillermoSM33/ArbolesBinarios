/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react';
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

const Comida = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);

    // Definiciones de funciones para manejar el estado del menú y órdenes
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false);
    };

    const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
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
            </nav>
            <main className="lg:pl-32 pb-20">
                <div className="md:p-8 p-4 text-center items-center">
                    <div className="flex justify-center items-center rounded-3xl mb-16 bg-white text-black font-semibold h-16 text-xl">
                        <p className="w-full text-center">Juntos podemos crear un mejor lugar, más sano y más activo para todos.</p>
                    </div>
                    <section className="bg-center border-amber-100 rounded-3xl bg-no-repeat bg-[url('/modelo.png')] bg-gray-700 bg-blend-multiply">
                        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                                Somos lo que ingerimos, e ingerimos lo que somos.
                            </h1>
                            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                                En nuestro equipo estamos enfocados en poder darle a los usuarios,
                                la facilidad de escoger las recetas de su elección,
                                dándoles una amplía variedad de platillos saludables de acorde a su edad.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                                <a
                                    href="/Comida_Niños"
                                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >
                                    Nuestros platillos
                                    <svg
                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://thefoodtech.com/nutricion-y-salud/estos-son-los-alimentos-sustentables-con-mayor-disponibilidad-en-mexico/"
                                    className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                                >
                                    Comida sustentable.
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="flex justify-center items-center rounded-3xl mb-16 mt-16  bg-white text-black font-semibold h-16 text-xl">
                        <p className="w-full text-center">La importancia de la comida en el desarrollo muscular.</p>
                    </div>
                    <video
                        className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
                        controls="autoplay"
                    >
                        <source src="/bulk_example.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="flex justify-center items-center rounded-3xl mb-16 mt-16  bg-white text-black font-semibold h-16 text-xl">
                        <p className="w-full text-center">Contratación de planes alimenticios.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                        <article className="relative mb-8 lg:mb-0">
                            <div className="bg-white rounded-full flex flex-col items-center justify-center w-[90px] h-[90px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
                                <h1 className="text-3xl font-bold text-[#7647cf]">$29</h1>
                                <span className="text-gray-500 text-sm">/ mes</span>
                            </div>
                            <div className="bg-gradient-to-t from-[#883ecf] to-[#d257a9] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <h1 className="text-3xl text-white font-bold uppercase tracking-[8px]">
                                        Regular
                                    </h1>
                                    <p className="text-gray-300 uppercase tracking-[2px] text-sm">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl tracking-[5px] font-medium">
                                        Lorem ipsum
                                    </h2>
                                    <p className="text-gray-400 uppercase text-xs tracking-[3px]">
                                        Dolor sit amet
                                    </p>
                                </div>
                                <div className="mt-10 py-6">
                                    <ul className="flex flex-col items-center">
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2 opacity-[.4]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-gray-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2 opacity-[.4]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-gray-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2 opacity-[.4]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-gray-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-[40%] mx-auto -mt-7">
                                <button className="w-full bg-gradient-to-r from-[#883ecf] to-[#d02597] hover:from-[#d02597] hover:to-[#883ecf] text-white p-4 rounded-full">
                                    Ordenar ahora
                                </button>
                            </div>
                        </article>
                        <article className="relative mb-8 lg:mb-0">
                            <div className="bg-white rounded-full flex flex-col items-center justify-center w-[100px] h-[100px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
                                <h1 className="text-3xl font-bold text-[#d22196]">$59</h1>
                                <span className="text-gray-500 text-sm">/ mes</span>
                            </div>
                            <div className="relative bg-gradient-to-t from-[#d22196] to-[#ef3460] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <h1 className="text-3xl text-white font-bold uppercase tracking-[8px]">
                                        Premium
                                    </h1>
                                    <p className="text-gray-300 uppercase tracking-[2px] text-sm">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                    <div className="absolute bg-white rounded-full py-1 px-6 mt-8 bottom-10">
                                        <h3>Recomendado</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl tracking-[5px] font-medium">
                                        Lorem ipsum
                                    </h2>
                                    <p className="text-gray-400 uppercase text-xs tracking-[3px]">
                                        Dolor sit amet
                                    </p>
                                </div>
                                <div className="mt-10 py-6">
                                    <ul className="flex flex-col items-center">
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2 opacity-[.4]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-gray-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-[40%] mx-auto -mt-7">
                                <button className="w-full bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196] text-white p-4 rounded-full">
                                    Ordenar ahora
                                </button>
                            </div>
                        </article>
                        <article className="relative mb-8 lg:mb-0">
                            <div className="bg-white rounded-full flex flex-col items-center justify-center w-[90px] h-[90px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
                                <h1 className="text-3xl font-bold text-[#7647cf]">$99</h1>
                                <span className="text-gray-500 text-sm">/ mes</span>
                            </div>
                            <div className="bg-gradient-to-t from-[#883ecf] to-[#d257a9] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <h1 className="text-3xl text-white font-bold uppercase tracking-[8px]">
                                        Empresarial
                                    </h1>
                                    <p className="text-gray-300 uppercase tracking-[2px] text-sm">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl tracking-[5px] font-medium">
                                        Lorem ipsum
                                    </h2>
                                    <p className="text-gray-400 uppercase text-xs tracking-[3px]">
                                        Dolor sit amet
                                    </p>
                                </div>
                                <div className="mt-10 py-6">
                                    <ul className="flex flex-col items-center">
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                        <li className="inline-flex gap-4 my-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-green-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>
                                            <span className="text-gray-500">
                                                Lorem ipsum dolor sit amet
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-[40%] mx-auto -mt-7">
                                <button className="w-full bg-gradient-to-r from-[#883ecf] to-[#d02597] hover:from-[#d02597] hover:to-[#883ecf] text-white p-4 rounded-full">
                                    Ordenar ahora
                                </button>
                            </div>
                        </article>
                    </div>
                    <div className="flex justify-center items-center rounded-3xl mb-16 mt-16  bg-white text-black font-semibold h-16 text-xl">
                        <p className="w-full text-center">Términos y condiciones.</p>

                    </div>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-16">

                    <a
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="/compromiso.png"
                            alt="Compromiso"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Nuestros Compromisos
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </a>

                    <a
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="/valores.png"
                            alt="Valores"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Nuestros Valores
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </a>

                    <a
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="/principios.png"
                            alt="Principios"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Nuestros Principios
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </a>

                    <a
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src="/metas.png"
                            alt="Metas"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Nuestras Metas
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </a>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Comida;