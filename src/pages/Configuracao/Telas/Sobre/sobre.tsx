import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaChartBar, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './sobre.module.css';
import BottomNav from '../../../../components/Menu/menu';

interface AboutSection {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const aboutSections: AboutSection[] = [
  {
    title: 'HoraCerta v1.0.0',
    content: 'Desenvolvido para simplificar o controle de ponto e gerenciamento de horas trabalhadas.',
    icon: <FaClock size={24} />
  },
  {
    title: 'Recursos',
    content: '- Registro de ponto digital\n- Controle de banco de horas\n- Relatórios detalhados\n- Notificações personalizáveis',
    icon: <FaChartBar size={24} />
  },
  {
    title: 'Desenvolvido por',
    content: 'InovaSoftBSB',
    icon: <FaUsers size={24} />
  }
];

export default function AboutScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaClock size={200} color="rgba(0,0,0,0.03)" />
      </div>
      
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.header}>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/configuracao')}
          >
            <FaArrowLeft size={20} />
          </button>
          <div>
            <h1 className={styles.title}>Sobre o App</h1>
            <p className={styles.subtitle}>Conheça mais sobre o HoraCerta</p>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          {aboutSections.map((section, index) => (
            <motion.div 
              key={index}
              className={styles.aboutSection}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconContainer}>
                {section.icon}
              </div>
              <div className={styles.sectionContent}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionText}>
                  {section.content.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < section.content.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}