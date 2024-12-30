import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineInfoCircle, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './precos.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Precos = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <AiOutlineClockCircle size={24} />
          HoraCerta
        </div>
        
        {/* Menu Desktop */}
        <div className={styles.navLinks}>
          <Link className={styles.navLink} to="/comoFunciona">Como funciona</Link>
          <Link className={styles.navLink} to="/recursos">Recursos</Link>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.primaryButton} to="/registro">Criar conta gratuita →</Link>
        </div>

        {/* Menu Mobile */}
        <motion.button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className={styles.mobileMenuOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              <motion.div
                className={styles.mobileMenu}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05 }
                    },
                    closed: {}
                  }}
                >
                  <Link className={styles.mobileNavLink} to="/comoFunciona" onClick={toggleMenu}>
                    Como Funciona
                  </Link>
                  <Link className={styles.mobileNavLink} to="/recursos" onClick={toggleMenu}>
                    Recursos
                  </Link>
                  <Link className={styles.mobileNavLink} to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link className={styles.mobilePrimaryButton} to="/registro" onClick={toggleMenu}>
                    Criar conta gratuita →
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Planos que cabem no seu bolso</h1>
        <p className={styles.headerSubtitle}>Escolha o plano ideal para gerenciar seus terceirizados</p>
      </header>

      <div className={styles.pricingGrid}>
        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Gratuito</h3>
          <div className={styles.planPrice}>R$ 0<span>/mês</span></div>
          <ul className={styles.planFeatures}>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Registro de ponto básico
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Edição de horários (entrada/saída)
              <span className={styles.infoIcon}>
                <AiOutlineInfoCircle />
                <div className={styles.tooltip}>
                  • Permite apenas editar o horário de entrada/saída<br/>
                  • Edição individual (um registro por vez)<br/>
                </div>
              </span>
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Exportação em PDF
            </li>
          </ul>
          <Link className={styles.primaryButton} to="/register">Começar agora</Link>
        </div>

        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Básico</h3>
          <div className={styles.planPrice}>R$ 9,99<span>/mês</span></div>
          <ul className={styles.planFeatures}>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Edição completa de registros
              <span className={styles.infoIcon}>
                <AiOutlineInfoCircle />
                <div className={styles.tooltip}>
                  • Edição de horário de entrada/saída<br/>
                  • Adicionar justificativas para alterações<br/>
                  • Possibilidade de adicionar anexos<br/>
                  • Validação por gestor
                </div>
              </span>
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Histórico de alterações
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Exportação Excel/PDF
            </li>
          </ul>
          <Link className={styles.primaryButton} to="/register">Começar agora</Link>
        </div>

        <div className={styles.pricingCard}>
          <h3 className={styles.planName}>Empresarial</h3>
          <div className={styles.planPrice}>Personalizado</div>
          <ul className={styles.planFeatures}>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Multi-empresas
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Edição e validação customizada
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Integrações personalizadas
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> API completa
            </li>
            <li className={styles.planFeature}>
              <AiOutlineCheckCircle /> Suporte dedicado
            </li>
          </ul>
          <a className={styles.secondaryButton} href="mailto:smartfinds271024@gmail.com">Fale conosco</a>
          <span className={styles.comingSoonBadge}>Em breve</span>
        </div>
      </div>
    </div>
  );
};

export default Precos;