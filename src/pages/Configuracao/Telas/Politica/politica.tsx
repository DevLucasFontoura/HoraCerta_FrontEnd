import { FaArrowLeft, FaDatabase, FaChartArea, FaShieldAlt, FaUsers, FaCloud, FaUser } from 'react-icons/fa';
import BottomNav from '../../../../components/Menu/menu';
import { useNavigate } from 'react-router-dom';
import styles from './politica.module.css';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PolicySection {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const policySections: PolicySection[] = [
  {
    title: 'Coleta de Dados',
    content: 'Coletamos apenas os dados necessários para o funcionamento do aplicativo: nome, e-mail, registros de ponto e configurações de preferências.',
    icon: <FaDatabase size={24} />
  },
  {
    title: 'Uso dos Dados',
    content: 'Seus dados são utilizados exclusivamente para gerenciamento de ponto, geração de relatórios e envio de notificações autorizadas.',
    icon: <FaChartArea size={24} />
  },
  {
    title: 'Segurança',
    content: 'Utilizamos práticas seguras de armazenamento e criptografia para proteger seus dados.',
    icon: <FaShieldAlt size={24} />
  },
  {
    title: 'Compartilhamento',
    content: 'Seus dados não são compartilhados com terceiros sem seu consentimento expresso.',
    icon: <FaUsers size={24} />
  },
  {
    title: 'Armazenamento',
    content: 'Seus dados são armazenados em servidores seguros e são mantidos apenas pelo tempo necessário.',
    icon: <FaCloud size={24} />
  },
  {
    title: 'Seus Direitos',
    content: 'Você tem direito a acessar, corrigir e solicitar a exclusão dos seus dados a qualquer momento.',
    icon: <FaUser size={24} />
  }
];

export default function PrivacyPolicyScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaShieldAlt size={200} color="rgba(0,0,0,0.03)" />
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
            <h1 className={styles.title}>Política de Privacidade</h1>
            <p className={styles.subtitle}>Saiba como seus dados são protegidos</p>
          </div>
        </div>

        <div className={styles.policyContainer}>
          {policySections.map((section, index) => (
            <motion.div 
              key={index}
              className={styles.policySection}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconContainer}>
                {section.icon}
              </div>
              <div className={styles.sectionContent}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionText}>{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className={styles.footerText}>
          Última atualização: Janeiro de 2025
        </p>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}