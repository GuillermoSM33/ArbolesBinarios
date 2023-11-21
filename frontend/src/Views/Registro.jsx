import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { gymApi } from '../api/gymApi';
function Registro() {
    const [campos, setCampos] = useState({
        nombre: '',
        apellidos: '', // Nuevo campo de apellido
        email: '',
        contrasena: ''
      });
    
      const [error, setError] = useState('');
      const [mostrarError, setMostrarError] = useState(false);
    
      const navegacion = useNavigate();
    
      const registrarUsuario = (e) => {
        e.preventDefault();
    
        // Verificar si hay campos vacíos
        if (campos.nombre === '' || campos.apellidos === '' || campos.email === '' || campos.contrasena === '') {
          setError('Completa todos los campos correctamente ⚠︎');
          setMostrarError(true);
          return;
        }
    
        // Resetear el mensaje de error
        setError('');
        setMostrarError(false);
    
        gymApi.post('/registrar', campos)
          .then(respuesta => {
            if (respuesta.data.Estatus === 'CORRECTO') {
              navegacion('/Login');
            } else {
              setError('Error al registrar usuario');
              setMostrarError(true);
            }
          })
          .catch(error => {
            console.log('Error al registrar usuario', error);
            setError('Error al registrar usuario');
            setMostrarError(true);
          });
      };
    

    

  return (
    <>
    <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
    <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Crear cuenta</h1>
            <p className="text-gray-400">Registrate en la plataforma</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={registrarUsuario}>
            <div>
                <label htmlFor="name" className="text-gray-200">
                    Nombre *
                </label>
                <input
                     type="text"
                     name="nombre"
                     value={campos.nombre}
                     onChange={(e) => setCampos({ ...campos, nombre: e.target.value })}
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu nombre completo"
                />
            </div>
            <div>
                <label htmlFor="apellido" className="text-gray-200">
                    Apellidos*
                </label>
                <input
                    type="text"
                    name="apellido"
                    placeholder="Ingresa tus apellidos"
                    value={campos.apellidos}
                    onChange={(e) => setCampos({ ...campos, apellidos: e.target.value })}
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                />
            </div>
            <div>
                <label htmlFor="email" className="text-gray-200">
                    Correo electrónico *
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={campos.email}
                    onChange={(e) => setCampos({ ...campos, email: e.target.value })}
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                />
            </div>
            <div>
                <label htmlFor="password" className="text-gray-200">
                    Contraseña *
                </label>
                <input
                    type="password"
                    name="contrasena"
                    placeholder="Ingresa tu contraseña"
                    value={campos.contrasena}
                    onChange={(e) => setCampos({ ...campos, contrasena: e.target.value })}
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
                <span className="text-gray-400">
                    ¿Ya tienes cuenta?{" "}
                    <Link to='/Login'
                        className="text-indigo-400 hover:text-indigo-500 transition-colors"
                    >
                        Ingresa
                    </Link>
                </span>
               
            </div>
            {mostrarError && <p className="error">{error}</p>}
            <div className="mt-4 order-1 md:order-2">
                <button
                    type="submit"
                    className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
                >
                    Crear cuenta
                </button>
            </div>
        </form>
    </div>
    <div className="bg hidden lg:block">
        <img
                src="/login.jpeg"
            
              />
        </div>
</div>
    </>
  );
}

export default Registro;
