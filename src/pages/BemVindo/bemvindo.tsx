import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BottomNav from '../../components/Menu/menu';
import styles from './bemvindo.module.css';

const RegistroDePonto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const formatDate = () => {
    return new Date().toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <motion.div 
            className={styles.welcomeContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.welcomeText}>Bem vindo,</span>
            <span className={styles.nameText}>João Silva</span>
          </motion.div>
          <motion.p 
            className={styles.dateText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            {formatDate()}
          </motion.p>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.statsContainer}>
          <motion.div 
            className={`${styles.statsCard} ${styles.workCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.statsHeader}>
              <div className={styles.dot} />
              <span className={styles.statsLabel}>Horas Trabalhadas</span>
            </div>
            <div className={styles.statsValue}>06:30</div>
            <div className={styles.statsSubtext}>Hoje</div>
          </motion.div>

          <motion.div 
            className={`${styles.statsCard} ${styles.balanceCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.statsHeader}>
              <div className={styles.dot} />
              <span className={styles.statsLabel}>Banco de Horas</span>
            </div>
            <div className={styles.statsValue}>+12:45</div>
            <div className={styles.statsSubtext}>Total</div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.insightCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className={styles.insightText}>
            Você está com 45 minutos extras hoje. Que tal sair mais cedo?
          </p>
        </motion.div>

        <section className={styles.activitySection}>
          <h3 className={styles.sectionTitle}>Registro de Hoje</h3>
          <motion.div 
            className={styles.timeCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.dateRow}>
              <span className={styles.dateText}>13/03/2024</span>
              <span className={styles.extraHours}>+2h</span>
            </div>
            
            <div className={styles.timelineRow}>
              <div className={styles.timeBlock}>
                <span className={styles.timeLabel}>Entrada</span>
                <span className={styles.timeValue}>09:00</span>
              </div>
              
              <div className={styles.timeBlock}>
                <span className={styles.timeLabel}>Almoço</span>
                <span className={styles.timeValue}>12:00</span>
              </div>
              
              <div className={styles.timeBlock}>
                <span className={styles.timeLabel}>Retorno</span>
                <span className={styles.timeValue}>13:00</span>
              </div>
              
              <div className={styles.timeBlock}>
                <span className={styles.timeLabel}>Saída</span>
                <span className={styles.timeValue}>18:00</span>
              </div>
            </div>

            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalValue}>8:00</span>
            </div>
          </motion.div>
        </section>
      </div>
      <BottomNav />
    </div>
  );
};

export default RegistroDePonto;