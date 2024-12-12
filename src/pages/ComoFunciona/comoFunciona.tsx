import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineFileText, AiOutlineBarChart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './comoFunciona.module.css';

const ComoFunciona = () => {
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
          <Link className={styles.navLink} to="/recursos">Recursos</Link>
          <Link className={styles.navLink} to="/precos">Preços</Link>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.primaryButton} to="/register">Criar conta gratuita →</Link>
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
                  <Link className={styles.mobileNavLink} to="/recursos" onClick={toggleMenu}>
                    Recursos
                  </Link>
                  <Link className={styles.mobileNavLink} to="/precos" onClick={toggleMenu}>
                    Preços
                  </Link>
                  <Link className={styles.mobileNavLink} to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link className={styles.mobilePrimaryButton} to="/register" onClick={toggleMenu}>
                    Criar conta gratuita →
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Como funciona o HoraCerta?</h1>
        <p className={styles.headerSubtitle}>Simples e eficiente para gerenciar o ponto dos seus terceirizados</p>
      </header>

      <section className={styles.stepsSection}>
        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <AiOutlineClockCircle size={32} />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>1. Registro de Ponto</h3>
            <p className={styles.stepDescription}>
              O terceirizado registra seu ponto diretamente no sistema, de forma simples e rápida.
              Pode ser feito via computador, tablet ou celular.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <AiOutlineFileText size={32} />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>2. Gestão de Registros</h3>
            <p className={styles.stepDescription}>
              Visualize todos os registros em um só lugar. Faça ajustes quando necessário,
              adicione justificativas e mantenha tudo organizado.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIcon}>
            <AiOutlineBarChart size={32} />
          </div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>3. Relatórios e Exportação</h3>
            <p className={styles.stepDescription}>
              Gere relatórios personalizados e exporte os dados em diferentes formatos.
              Tenha controle total sobre as informações dos seus terceirizados.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Recursos Principais</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineCheckCircle />
            </div>
            <h3 className={styles.featureTitle}>Registro Simplificado</h3>
            <p className={styles.featureDescription}>
              Interface intuitiva para registro de ponto, sem complicações
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineCheckCircle />
            </div>
            <h3 className={styles.featureTitle}>Edição Flexível</h3>
            <p className={styles.featureDescription}>
              Ajuste registros quando necessário, com histórico de alterações
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineCheckCircle />
            </div>
            <h3 className={styles.featureTitle}>Exportação Fácil</h3>
            <p className={styles.featureDescription}>
              Exporte dados em PDF ou Excel para suas necessidades
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineCheckCircle />
            </div>
            <h3 className={styles.featureTitle}>Relatórios Detalhados</h3>
            <p className={styles.featureDescription}>
              Visualize e analise dados de forma clara e organizada
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
        <p className={styles.ctaDescription}>
          Experimente gratuitamente e veja como é fácil gerenciar o ponto dos seus terceirizados
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} to="/register">Criar conta gratuita →</Link>
          <Link className={styles.secondaryButton} to="/precos">Ver planos</Link>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;