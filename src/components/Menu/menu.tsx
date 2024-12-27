import { AiOutlineHome, AiOutlineDashboard, AiOutlineSetting } from 'react-icons/ai';
import { IoStatsChartOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import styles from './menu.module.css';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Versão Mobile */}
      <nav className={styles.mobileNav}>
        <Link to="/bemVindo" className={location.pathname === '/bemVindo' ? styles.active : ''}>
          <AiOutlineHome size={24} />
          <span>Home</span>
        </Link>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? styles.active : ''}>
          <AiOutlineDashboard size={24} />
          <span>Dashboard</span>
        </Link>
        <button 
          className={`${styles.addButton} ${location.pathname === '/registrarPonto' ? styles.active : ''}`}
          onClick={() => navigate('/registrarPonto')}
        >
          <FiPlusCircle size={32} />
        </button>
        <Link to="/relatorios" className={location.pathname === '/relatorios' ? styles.active : ''}>
          <IoStatsChartOutline size={24} />
          <span>Relatórios</span>
        </Link>
        <Link to="/configuracao" className={location.pathname === '/configuracao' ? styles.active : ''}>
          <AiOutlineSetting size={24} />
          <span>Ajustes</span>
        </Link>
      </nav>

      {/* Versão Desktop */}
      <nav className={styles.desktopNav}>
        <div className={styles.navContent}>
          <Link to="/bemVindo" className={location.pathname === '/bemVindo' ? styles.active : ''}>
            <AiOutlineHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? styles.active : ''}>
            <AiOutlineDashboard size={24} />
            <span>Dashboard</span>
          </Link>
          <button 
            className={styles.addButton}
            onClick={() => navigate('/registrarPonto')}
          >
            <FiPlusCircle size={32} />
          </button>
          <Link to="/relatorios" className={location.pathname === '/relatorios' ? styles.active : ''}>
            <IoStatsChartOutline size={24} />
            <span>Relatórios</span>
          </Link>
          <Link to="/configuracao" className={location.pathname === '/configuracao' ? styles.active : ''}>
            <AiOutlineSetting size={24} />
            <span>Ajustes</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default BottomNav; 