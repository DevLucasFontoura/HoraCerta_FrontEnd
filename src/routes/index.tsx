import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/home';
import ComoFunciona from '../pages/ComoFunciona/comoFunciona';
import Precos from '../pages/Precos/precos';
import Recursos from '../pages/Recursos/recursos';
import Login from '../pages/Login/login';
import Registro from '../pages/Registro/registro';
import BemVindo from '../pages/BemVindo/bemvindo';
import Dashboard from '../pages/Dashboard/dashboard';
import Configuracao from '../pages/Configuracao/configuracao';
import Perfil from '../pages/Configuracao/Telas/Perfil/perfil';
import Notificacoes from '../pages/Configuracao/Telas/Notificacoes/notificacoes';
import Jornada from '../pages/Configuracao/Telas/Jornada/jornada';
import Feriados from '../pages/Configuracao/Telas/Feriados/feriados';
import Tutorial from '../pages/Configuracao/Telas/Tutorial/tutorial';
import Perguntas from '../pages/Configuracao/Telas/Perguntas/perguntas';
import Politica from '../pages/Configuracao/Telas/Politica/politica';
import Sobre from '../pages/Configuracao/Telas/Sobre/sobre';
import Suporte from '../pages/Configuracao/Telas/Suporte/suporte';

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
    path: '/bemVindo',
    element: <BemVindo />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/configuracao',
    element: <Configuracao />,
  },
  {
    path: '/configuracao/telas/perfil',
    element: <Perfil />,
  },
  {
    path: '/configuracao/telas/notificacoes',
    element: <Notificacoes />,
  },
  {
    path: '/configuracao/telas/jornada',
    element: <Jornada />,
  },
  {
    path: '/configuracao/telas/feriados',
    element: <Feriados />,
  },
  {
    path: '/configuracao/telas/tutorial',
    element: <Tutorial />,
  },
  {
    path: '/configuracao/telas/perguntas',
    element: <Perguntas />,
  },
  {
    path: '/configuracao/telas/politica',
    element: <Politica />,
  },
  {
    path: '/configuracao/telas/sobre',
    element: <Sobre />,
  },
  {
    path: '/configuracao/telas/suporte',
    element: <Suporte />,
  },
  // Adicione outras rotas aqui
]);
