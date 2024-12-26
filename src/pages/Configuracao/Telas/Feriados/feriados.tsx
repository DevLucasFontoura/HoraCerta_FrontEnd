import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaArrowLeft, FaPlus, FaTrash, FaQuestionCircle, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './feriados.module.css';
import BottomNav from '../../../../components/Menu/menu';

interface Holiday {
  date: Date;
  description: string;
  affectsWeekHours: boolean;
}

export default function HolidayScreen() {
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const addHoliday = () => {
    if (!selectedDate) return;
    
    const date = new Date(selectedDate);
    const isSaturday = date.getDay() === 6;
    const newHoliday: Holiday = {
      date,
      description: 'Feriado',
      affectsWeekHours: isSaturday
    };
    setHolidays([...holidays, newHoliday]);
    setSelectedDate('');
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaCalendar size={200} color="rgba(0,0,0,0.03)" />
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
            <h1 className={styles.title}>Feriados e Compensações</h1>
            <p className={styles.subtitle}>
              Adicione feriados que caem no sábado para ajustar automaticamente sua jornada semanal
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.addHolidayContainer}>
            <input
              type="date"
              className={styles.dateInput}
              value={selectedDate}
              onChange={handleDateChange}
            />
            <button 
              className={styles.addButton}
              onClick={addHoliday}
              disabled={!selectedDate}
            >
              <FaPlus size={16} />
              <span>Adicionar Feriado</span>
            </button>
          </div>

          <div className={styles.holidayList}>
            {holidays.map((holiday, index) => (
              <motion.div 
                key={index} 
                className={styles.holidayCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className={styles.holidayInfo}>
                  <span className={styles.holidayDate}>
                    {holiday.date.toLocaleDateString('pt-BR')}
                  </span>
                  <span className={styles.holidayStatus}>
                    {holiday.affectsWeekHours 
                      ? 'Afeta jornada semanal (8h/dia)'
                      : 'Não afeta jornada semanal (8h48/dia)'}
                  </span>
                </div>
                <button 
                  className={styles.deleteButton}
                  onClick={() => {
                    const newHolidays = holidays.filter((_, i) => i !== index);
                    setHolidays(newHolidays);
                  }}
                >
                  <FaTrash size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <button 
          className={styles.helpButton}
          onClick={() => setShowHelpModal(true)}
        >
          <FaQuestionCircle size={16} />
          <span>Como funciona?</span>
        </button>

        {showHelpModal && (
          <div className={styles.modalOverlay}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>Como funciona?</h2>
                <button 
                  className={styles.closeButton}
                  onClick={() => setShowHelpModal(false)}
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.helpSection}>
                  <h3>Jornada Normal</h3>
                  <p>
                    Normalmente, você trabalha 8 horas e 48 minutos por dia (de segunda a sexta) 
                    para compensar o sábado não trabalhado.
                  </p>
                </div>

                <div className={styles.helpSection}>
                  <h3>Feriados aos Sábados</h3>
                  <p>
                    Quando um feriado cai no sábado, você não precisa compensar esse dia durante a semana.
                    Nessa semana específica, sua jornada será de 8 horas por dia.
                  </p>
                </div>

                <div className={styles.helpSection}>
                  <h3>Como Usar</h3>
                  <p>
                    1. Clique em "Adicionar Feriado"<br />
                    2. Selecione a data do feriado<br />
                    3. Se for um sábado, o sistema automaticamente ajustará sua jornada para 8h/dia naquela semana
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
      
      <BottomNav />
    </div>
  );
}