import { AiOutlineClockCircle, AiOutlineEdit, AiOutlineFileText, AiOutlineMobile, AiOutlineSafety, AiOutlineTeam, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import AnimatedClock from '../../components/AnimatedClock/AnimatedClock';
import { motion, AnimatePresence } from 'framer-motion';
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
          HoraCerta
        </div>
        
        {/* Menu Desktop */}
        <div className={styles.navLinks}>
          <Link className={styles.navLink} to="/recursos">Recursos</Link>
          <Link className={styles.navLink} to="/precos">Preços</Link>
          <Link className={styles.navLink} to="/comoFunciona">Como funciona</Link>
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
                  <Link className={styles.mobileNavLink} to="/recursos" onClick={toggleMenu}>
                    Recursos
                  </Link>
                  <Link className={styles.mobileNavLink} to="/precos" onClick={toggleMenu}>
                    Preços
                  </Link>
                  <Link className={styles.mobileNavLink} to="/comoFunciona" onClick={toggleMenu}>
                    Como funciona
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

      <div className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedClock />
          <div className={styles.gradient} />
          <h1 className={styles.heroTitle}>
            Controle de ponto que seus colaboradores vão adorar usar
          </h1>
          <p className={styles.heroSubtitle}>
            Uma ferramenta simples e intuitiva para registro e gestão de ponto. 
            Sem complicações, sem burocracias.
          </p>
          <div className={styles.buttonGroup}>
            <Link className={styles.primaryButton} to="/registro">
              Começar gratuitamente →
            </Link>
            <Link className={styles.secondaryButton} to="/login">
              Já tem uma conta? Faça login
            </Link>
          </div>
        </motion.div>
      </div>

      <section className={styles.features} id="recursos">
        <h2 className={styles.sectionTitle}>Recursos que facilitam sua gestão</h2>
        <p className={styles.sectionSubtitle}>
          Tudo que você precisa para gerenciar o ponto dos seus terceirizados
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineClockCircle size={28} />
            </div>
            <div>
              <h3>Registro Simplificado</h3>
              <p>Registre o ponto de forma rápida e intuitiva, sem complicações ou burocracias.</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineEdit size={28} />
            </div>
            <div>
              <h3>Edição Flexível</h3>
              <p>Faça ajustes nos registros quando necessário, com histórico completo de alterações.</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineFileText size={28} />
            </div>
            <div>
              <h3>Relatórios Detalhados</h3>
              <p>Gere relatórios personalizados e exporte em PDF ou Excel.</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineMobile size={28} />
            </div>
            <div>
              <h3>Acesso de Qualquer Lugar</h3>
              <p>Sistema 100% online, acesse de qualquer dispositivo a qualquer momento.</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineSafety size={28} />
            </div>
            <div>
              <h3>Dados Seguros</h3>
              <p>Seus dados estão protegidos e podem ser exportados quando precisar.</p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AiOutlineTeam size={28} />
            </div>
            <div>
              <h3>Gestão Simplificada</h3>
              <p>Gerencie todos os registros em um só lugar de forma organizada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.enterpriseSection}>
        <div className={styles.enterpriseContent}>
          <div>
            <h2 className={styles.sectionTitle}>HoraCerta para Empresas</h2>
            <p className={styles.sectionSubtitle}>
              Soluções personalizadas para grandes empresas. 
              Integração com sistemas existentes, suporte dedicado e muito mais.
            </p>
            <span className={styles.comingSoonBadge}>Em breve</span>
          </div>
          <div className={styles.enterpriseImage}>🏢</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;