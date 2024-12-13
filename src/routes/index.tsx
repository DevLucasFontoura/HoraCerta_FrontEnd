import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/home';
import ComoFunciona from '../pages/ComoFunciona/comoFunciona';
import Precos from '../pages/Precos/precos';
import Recursos from '../pages/Recursos/recursos';
import Login from '../pages/Login/login';
import Registro from '../pages/Registro/registro';
import RegistroPonto from '../pages/RegistroPonto/registroPonto';
import Dashboard from '../pages/Dashboard/dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/comoFunciona',
    element: <ComoFunciona />,
  },
  {
    path: '/precos',
    element: <Precos />,
  },
  {
    path: '/recursos',
    element: <Recursos />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Registro />,
  },
  {
    path: '/registroPonto',
    element: <RegistroPonto />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  // Adicione outras rotas aqui
]);
