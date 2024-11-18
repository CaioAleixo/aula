import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Erro404 from './pages/Erro404';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/*" element={<Erro404 />} /> 
      </Routes> 
    </BrowserRouter>

  );
}

export default App;