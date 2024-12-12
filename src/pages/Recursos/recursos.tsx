import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AiOutlineClockCircle, 
  AiOutlineEdit, 
  AiOutlineFileText, 
  AiOutlineMobile, 
  AiOutlineSafety, 
  AiOutlineTeam,
  AiOutlineBarChart,
  AiOutlineCloud,
  AiOutlineNotification,
  AiOutlineMenu,
  AiOutlineClose
} from 'react-icons/ai';
import styles from './recursos.module.css';

const FeaturesPage = () => {
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
                <Link className={styles.mobileNavLink} to="/" onClick={toggleMenu}>
                  Voltar ao início
                </Link>
                <Link className={styles.mobilePrimaryButton} to="/register" onClick={toggleMenu}>
                  Criar conta gratuita →
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Recursos Completos</h1>
        <p className={styles.headerSubtitle}>Conheça todas as funcionalidades do HoraCerta</p>
      </header>

      <section className={styles.featuresSection}>
        <div className={styles.featureCategory}>
          <h2 className={styles.categoryTitle}>Registro de Ponto</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineClockCircle size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Registro Simplificado</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Interface intuitiva e fácil de usar</li>
                    <li>Registro rápido de entrada e saída</li>
                    <li>Confirmação instantânea</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineMobile size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Acesso Multiplataforma</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Acesse de qualquer dispositivo</li>
                    <li>Compatível com celular e tablet</li>
                    <li>Sistema 100% online</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineNotification size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Notificações</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Lembretes de registro</li>
                    <li>Alertas de inconsistências</li>
                    <li>Confirmações por email</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featureCategory}>
          <h2 className={styles.categoryTitle}>Gestão e Edição</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineEdit size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Edição Flexível</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Ajuste de horários</li>
                    <li>Adição de justificativas</li>
                    <li>Anexo de documentos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineTeam size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Gestão Simplificada</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Visão geral dos registros</li>
                    <li>Organização por períodos</li>
                    <li>Filtros avançados</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineCloud size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Backup Automático</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Dados sempre seguros</li>
                    <li>Histórico completo</li>
                    <li>Recuperação facilitada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featureCategory}>
          <h2 className={styles.categoryTitle}>Relatórios e Exportação</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineFileText size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Relatórios Detalhados</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Relatórios personalizados</li>
                    <li>Múltiplos formatos</li>
                    <li>Exportação facilitada</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineBarChart size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Análise de Dados</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Visualização de tendências</li>
                    <li>Estatísticas detalhadas</li>
                    <li>Insights importantes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <AiOutlineSafety size={28} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Segurança</h3>
                <div className={styles.featureDescription}>
                  <ul>
                    <li>Dados criptografados</li>
                    <li>Backup regular</li>
                    <li>Conformidade com LGPD</li>
                  </ul>
                </div>
              </div>
            </div>
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

export default FeaturesPage;