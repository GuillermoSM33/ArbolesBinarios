import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../Components/UserContext';

function Login() {

    const [body, setBody] = useState({
        email: "",
        contrasena: ""
      });
      const [errores, setErrores] = useState({});
      const { usuario, obtenerUsuarioActual } = useContext(UserContext);
      const navigate = useNavigate();
    
      useEffect(() => {
        const verificarSesion = localStorage.getItem("token");
        if (verificarSesion && !usuario) {
          navigate("/Comida");
        }
      }, [usuario, navigate]);
    
      const cambioEntrada = (e) => {
        setBody({ ...body, [e.target.name]: e.target.value });
        setErrores({ ...errores, [e.target.name]: "" });
      };
    
      const Enviar = async (e) => {
        e.preventDefault(); // Evita que se realice la acción por defecto del submit.
    
        setErrores({ email: "", contrasena: "" });
    
        if (!body.email || !body.contrasena) {
          setErrores((prevErrores) => ({
            ...prevErrores,
            email: body.email ? "" : "Debe llenar todos los campos.",
            contrasena: body.contrasena ? "" : "Debe llenar todos los campos."
          }));
          return;
        }
    
        try {
          const verificarCorreo = await axios.post("http://localhost:8081/VerificarCorreo", { email: body.email });
          if (verificarCorreo.data.Estatus === "CORRECTO") {
            return setErrores({ email: "El usuario que ingresaste no existe." });
          }
    
          const verificarUsuario = await axios.post("http://localhost:8081/login", body);
          if (verificarUsuario.data.Estatus === "CORRECTO") {
            localStorage.setItem("token", verificarUsuario.data.token);
            await obtenerUsuarioActual();
            navigate("/comida");
          } else {
            setErrores({ contrasena: "Email o Contraseña incorrecta." });
          }
        } catch (error) {
          console.log("Se produjo un error: ", error);
        }
      };

  return (
    <>
      <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Iniciar sesión</h1>
            <p className="text-gray-400">
              Ingresa al sistema con tus credenciales
            </p>
          </div>

          <div className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                width="20"
                height="20"
              />
              <span className="ml-2">Ingresar con Google</span>
            </button>
          </div>

          <form className="flex flex-col gap-4" onSubmit={Enviar}>
            <div>
              <label htmlFor="email" className="text-gray-200">
                Correo electrónico *
              </label>
              <input
                value={body.email}
                onChange={cambioEntrada}
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu correo electrónico"
             
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-200">
                Contraseña *
              </label>
              <input
                value={body.contrasena}
                onChange={cambioEntrada}
                name="contrasena"
                type="password"
                id="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
                
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿No tienes cuenta?{" "}
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  Registrate
                </a>
              </span>
           
            </div>
            <div className="mt-4 order-1 md:order-2">
              <button
              onClick={Enviar}
                type="submit"
                className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                Iniciar sesión
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

export default Login;
