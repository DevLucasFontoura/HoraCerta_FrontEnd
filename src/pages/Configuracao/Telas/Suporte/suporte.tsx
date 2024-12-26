import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './suporte.module.css';
import BottomNav from '../../../../components/Menu/menu';

interface SupportItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  path?: string;
  isEmail?: boolean;
}

const supportItems: SupportItem[] = [
  {
    title: 'Horário de Atendimento',
    description: 'Segunda a Sexta: 08h às 18h',
    icon: <FaClock size={24} />
  },
  {
    title: 'E-mail para Contato',
    description: 'suporte@horacerta.com',
    icon: <FaEnvelope size={24} />,
    isEmail: true
  },
  {
    title: 'Tempo de Resposta',
    description: 'Nossa equipe responderá em até 24 horas úteis',
    icon: <FaClock size={24} />
  },
  {
    title: 'FAQ',
    description: 'Consulte nossa página de perguntas frequentes',
    icon: <FaQuestionCircle size={24} />,
    path: '/configuracao/telas/perguntas'
  }
];

export default function SupportScreen() {
  const navigate = useNavigate();

  const handleItemClick = (item: SupportItem) => {
    if (item.isEmail) {
      window.location.href = 'mailto:suporte@horacerta.com';
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaQuestionCircle size={200} color="rgba(0,0,0,0.03)" />
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
            <h1 className={styles.title}>Suporte ao Cliente</h1>
            <p className={styles.subtitle}>Como podemos ajudar você?</p>
          </div>
        </div>

        <div className={styles.supportContainer}>
          {supportItems.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.supportItem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleItemClick(item)}
              style={{ cursor: (item.path || item.isEmail) ? 'pointer' : 'default' }}
            >
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className={styles.footerText}>
          Estamos aqui para ajudar você com qualquer dúvida ou problema que possa ter.
        </p>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}