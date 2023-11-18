import Comida from './Views/Comida';
import Login from './Views/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Comida" element={<Comida />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
