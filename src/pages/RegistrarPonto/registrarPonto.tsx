import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  AiOutlineClockCircle, 
  AiOutlineCoffee,
  AiOutlineLogin,
  AiOutlineLogout 
} from 'react-icons/ai';
import PageTransition from '../../components/PageTransition/pageTransition';
import pageStyles from '../../styles/PageStyles.module.css';
import styles from './registrarPonto.module.css';
import BottomNav from '../../components/Menu/menu';

interface TimeState {
  hours: string;
  minutes: string;
  seconds: string;
}

interface TimeRecord {
  type: 'entry' | 'lunchOut' | 'lunchReturn' | 'exit';
  time: string;
  label: string;
}

const timeDisplayVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5
    }
  }
};

export default function RegistrarPonto() {
  const [currentTime, setCurrentTime] = useState<TimeState>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [todayRecords, setTodayRecords] = useState<TimeRecord[]>([]);

  // Estado para controlar quais botões estão habilitados
  const [todayRecord, setTodayRecord] = useState({
    entry: false,
    lunchOut: false,
    lunchReturn: false,
    exit: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegister = (type: 'entry' | 'lunchOut' | 'lunchReturn' | 'exit') => {
    setLoading(true);
    setError('');
    
    const currentTimeString = `${currentTime.hours}:${currentTime.minutes}`;
    
    // Mapeamento de tipos para labels
    const typeLabels = {
      entry: 'Entrada',
      lunchOut: 'Saída Almoço',
      lunchReturn: 'Retorno Almoço',
      exit: 'Saída'
    };

    setTimeout(() => {
      // Atualiza o estado dos botões
      setTodayRecord(prev => ({
        ...prev,
        [type]: true
      }));

      // Adiciona o novo registro ao histórico
      setTodayRecords(prev => [...prev, {
        type,
        time: currentTimeString,
        label: typeLabels[type]
      }]);

      setSuccess('Ponto registrado com sucesso!');
      setLoading(false);

      // Limpa a mensagem de sucesso após 3 segundos
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className={styles.pageContainer}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Registrar Ponto</h1>
          <p className={styles.pageSubtitle}>Registre sua entrada, almoço ou saída</p>
        </div>

        <div className={pageStyles.card}>
          <motion.div 
            className={styles.timeDisplay}
            initial="hidden"
            animate="visible"
            variants={timeDisplayVariants}
          >
            <div className={styles.timeValue}>
              {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
            </div>
            <div className={styles.timeDate}>
              {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </motion.div>

          {error && <div className={styles.errorMessage}>{error}</div>}
          {success && <div className={styles.successMessage}>{success}</div>}

          <div className={styles.buttonGrid}>
            <button 
              className={styles.timeButton}
              onClick={() => handleRegister('entry')} 
              disabled={loading || todayRecord.entry}
            >
              <div className={styles.buttonIcon}><AiOutlineLogin /></div>
              <div className={styles.buttonLabel}>Entrada</div>
            </button>

            <button 
              className={styles.timeButton}
              onClick={() => handleRegister('lunchOut')} 
              disabled={loading || !todayRecord.entry || todayRecord.lunchOut}
            >
              <div className={styles.buttonIcon}><AiOutlineCoffee /></div>
              <div className={styles.buttonLabel}>Saída Almoço</div>
            </button>

            <button 
              className={styles.timeButton}
              onClick={() => handleRegister('lunchReturn')} 
              disabled={loading || !todayRecord.lunchOut || todayRecord.lunchReturn}
            >
              <div className={styles.buttonIcon}><AiOutlineLogin /></div>
              <div className={styles.buttonLabel}>Retorno Almoço</div>
            </button>

            <button 
              className={styles.timeButton}
              onClick={() => handleRegister('exit')} 
              disabled={loading || !todayRecord.lunchReturn || todayRecord.exit}
            >
              <div className={styles.buttonIcon}><AiOutlineLogout /></div>
              <div className={styles.buttonLabel}>Saída</div>
            </button>
          </div>

          <motion.div
            className={styles.historySection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className={styles.historyTitle}>Histórico de Hoje</h2>
            <div className={styles.timelineContainer}>
              <div className={styles.timelineWrapper}>
                {todayRecords.map((record, index) => (
                  <motion.div 
                    key={index}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineTime}>{record.time}</span>
                      <span className={styles.timelineLabel}>{record.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <BottomNav />
    </PageTransition>
  );
}