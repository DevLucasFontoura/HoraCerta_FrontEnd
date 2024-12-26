import { motion } from 'framer-motion';
import { FaBell, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './notificacoes.module.css';
import BottomNav from '../../../../components/Menu/menu';
import { useState } from 'react';

export default function NotificationsScreen() {
  const navigate = useNavigate();
  const [pointReminder, setPointReminder] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handlePointReminderToggle = (value: boolean) => {
    setPointReminder(value);
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaBell size={200} color="rgba(0,0,0,0.03)" />
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
            <h1 className={styles.title}>Notificações</h1>
            <p className={styles.subtitle}>Configure suas preferências de notificação</p>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.notificationItem}>
            <div className={styles.notificationText}>
              <h3 className={styles.notificationTitle}>Lembrete de Ponto</h3>
              <p className={styles.notificationDescription}>
                Receba lembretes diários para registrar seu ponto
              </p>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={pointReminder}
                onChange={(e) => handlePointReminderToggle(e.target.checked)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>

          <div className={styles.notificationItem}>
            <div className={styles.notificationText}>
              <h3 className={styles.notificationTitle}>E-mails</h3>
              <p className={styles.notificationDescription}>
                Receba relatórios semanais por e-mail
              </p>
              <div className={styles.comingSoonContainer}>
                <span className={styles.comingSoon}>Em breve</span>
              </div>
            </div>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => {}}
                disabled
              />
              <span className={`${styles.slider} ${styles.disabled}`}></span>
            </label>
          </div>
        </section>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}