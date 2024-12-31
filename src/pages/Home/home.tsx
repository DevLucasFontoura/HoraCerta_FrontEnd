import { AiOutlineClockCircle, AiOutlineEdit, AiOutlineFileText, AiOutlineMobile, AiOutlineSafety, AiOutlineTeam, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import AnimatedClock from '../../components/AnimatedClock/AnimatedClock';
import { motion, AnimatePresence } from 'framer-motion';
import { CONSTANTES } from '../../common/constantes';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { useState } from 'react';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <AiOutlineClockCircle size={24} />
          {CONSTANTES.TITULO_SITE}
        </div>
        
        {/* Menu Desktop */}
        <div className={styles.navLinks}>
          <Link className={styles.navLink} to={CONSTANTES.RECURSOS}>{CONSTANTES.TITULO_MENU_RECURSOS}</Link>
          <Link className={styles.navLink} to={CONSTANTES.PRECOS}>{CONSTANTES.TITULO_MENU_PRECOS}</Link>
          <Link className={styles.navLink} to={CONSTANTES.COMO_FUNCIONA}>{CONSTANTES.TITULO_MENU_COMO_FUNCIONA}</Link>
          <Link className={styles.primaryButton} to={CONSTANTES.REGISTRO}>{CONSTANTES.BOTAO_COMECAR}</Link>
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
                  <Link className={styles.mobileNavLink} to={CONSTANTES.RECURSOS} onClick={toggleMenu}>{CONSTANTES.TITULO_MENU_RECURSOS}</Link>
                  <Link className={styles.mobileNavLink} to={CONSTANTES.PRECOS} onClick={toggleMenu}>{CONSTANTES.TITULO_MENU_PRECOS}</Link>
                  <Link className={styles.mobileNavLink} to={CONSTANTES.COMO_FUNCIONA} onClick={toggleMenu}>{CONSTANTES.TITULO_MENU_COMO_FUNCIONA}</Link>
                  <Link className={styles.mobilePrimaryButton} to={CONSTANTES.REGISTRO} onClick={toggleMenu}>{CONSTANTES.BOTAO_COMECAR}</Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <div className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedClock />
          <div className={styles.gradient} />
          <h1 className={styles.heroTitle}>{CONSTANTES.TITULO_PRINCIPAL}</h1>
          <p className={styles.heroSubtitle}>{CONSTANTES.SUBTITULO_PRINCIPAL}</p>
          <div className={styles.buttonGroup}>
            <Link className={styles.primaryButton} to={CONSTANTES.REGISTRO}>{CONSTANTES.BOTAO_COMECAR}</Link>
            <Link className={styles.secondaryButton} to={CONSTANTES.LOGIN}>{CONSTANTES.BOTAO_LOGIN}</Link>
          </div>
        </motion.div>
      </div>

      <section className={styles.features} id="recursos">
        <h2 className={styles.sectionTitle}>{CONSTANTES.TITULO_RECURSOS}</h2>
        <p className={styles.sectionSubtitle}>{CONSTANTES.SUBTITULO_RECURSOS}</p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><AiOutlineClockCircle size={28} /></div>
            <div>
              <h3>{CONSTANTES.CARD_RECURSOS_01_TITULO}</h3>
              <p>{CONSTANTES.CARD_RECURSOS_01_SUBTITULO}</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><AiOutlineEdit size={28} /></div>
            <div>
              <h3>{CONSTANTES.CARD_RECURSOS_02_TITULO}</h3>
              <p>{CONSTANTES.CARD_RECURSOS_02_SUBTITULO}</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><AiOutlineFileText size={28} /></div>
            <div>
              <h3>{CONSTANTES.CARD_RECURSOS_03_TITULO}</h3>
              <p>{CONSTANTES.CARD_RECURSOS_03_SUBTITULO}</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><AiOutlineMobile size={28} /></div>
            <div>
              <h3>{CONSTANTES.CARD_RECURSOS_04_TITULO}</h3>
              <p>{CONSTANTES.CARD_RECURSOS_04_SUBTITULO}</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><AiOutlineSafety size={28} /></div>
            <div>
              <h3>{CONSTANTES.CARD_RECURSOS_05_TITULO}</h3>
              <p>{CONSTANTES.CARD_RECURSOS_05_SUBTITULO}</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><AiOutlineTeam size={28} /></div>
            <div>
              <h3>{CONSTANTES.CARD_RECURSOS_06_TITULO}</h3>
              <p>{CONSTANTES.CARD_RECURSOS_06_SUBTITULO}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.enterpriseSection}>
        <div className={styles.enterpriseContent}>
          <div>
            <h2 className={styles.sectionTitle}>{CONSTANTES.TITULO_EMPRESA}</h2>
            <p className={styles.sectionSubtitle}>{CONSTANTES.SUBTITULO_EMPRESA}</p>
            <span className={styles.comingSoonBadge}>{CONSTANTES.COMING_SOON}</span>
          </div>
          <div className={styles.enterpriseImage}>{CONSTANTES.ICONE_EMPRESA}</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;