import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2, FiClock, FiCalendar, FiFileText } from 'react-icons/fi';
import { IoStatsChartOutline } from 'react-icons/io5';
import { BsArrowRightShort } from 'react-icons/bs';
import styles from './relatorios.module.css';
import BottomNav from '../../components/Menu/menu';

interface TimeRecord {
  id: string;
  date: string;
  entry: string;
  lunchOut: string;
  lunchReturn: string;
  exit: string;
  total: string;
}

interface TimeRecordItemProps {
  record: TimeRecord;
}

const StatsCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => {
  return (
    <motion.div
      className={styles.statsCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.statsIcon}>{icon}</div>
      <div className={styles.statsContent}>
        <div className={styles.statsLabel}>{label}</div>
        <div className={styles.statsValue}>{value}</div>
      </div>
    </motion.div>
  );
};

const TimeRecordItem = ({ record }: TimeRecordItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecord, setEditedRecord] = useState(record);

  const handleEdit = () => {
    if (isEditing) {
      // Aqui você implementaria a lógica para salvar as alterações
      console.log('Salvando alterações:', editedRecord);
    }
    setIsEditing(!isEditing);
  };

  const handleTimeChange = (field: keyof TimeRecord, value: string) => {
    setEditedRecord(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <motion.div 
      className={styles.recordCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Data</span>
        <span className={styles.recordValue}>{record.date}</span>
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Entrada</span>
        {isEditing ? (
          <input
            type="time"
            value={editedRecord.entry}
            onChange={(e) => handleTimeChange('entry', e.target.value)}
            className={styles.timeInput}
          />
        ) : (
          <span className={styles.recordValue}>{record.entry || '--:--'}</span>
        )}
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Saída Almoço</span>
        {isEditing ? (
          <input
            type="time"
            value={editedRecord.lunchOut}
            onChange={(e) => handleTimeChange('lunchOut', e.target.value)}
            className={styles.timeInput}
          />
        ) : (
          <span className={styles.recordValue}>{record.lunchOut || '--:--'}</span>
        )}
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Retorno Almoço</span>
        {isEditing ? (
          <input
            type="time"
            value={editedRecord.lunchReturn}
            onChange={(e) => handleTimeChange('lunchReturn', e.target.value)}
            className={styles.timeInput}
          />
        ) : (
          <span className={styles.recordValue}>{record.lunchReturn || '--:--'}</span>
        )}
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Saída</span>
        {isEditing ? (
          <input
            type="time"
            value={editedRecord.exit}
            onChange={(e) => handleTimeChange('exit', e.target.value)}
            className={styles.timeInput}
          />
        ) : (
          <span className={styles.recordValue}>{record.exit || '--:--'}</span>
        )}
      </div>
      <div className={`${styles.recordRow} ${styles.totalRow}`}>
        <span className={styles.recordLabel}>Total</span>
        <span className={styles.recordValue}>{record.total || '--:--'}</span>
      </div>
      <div className={styles.dangerZone}>
        <button onClick={handleEdit} className={styles.editButton}>
          {isEditing ? 'Salvar' : 'Editar'}
        </button>
      </div>
    </motion.div>
  );
};

// Dados mockados para exemplo
const mockTimeRecords: TimeRecord[] = [
  {
    id: '1',
    date: '15/03/2024',
    entry: '08:00',
    lunchOut: '12:00',
    lunchReturn: '13:00',
    exit: '17:00',
    total: '08:00'
  },
  {
    id: '2',
    date: '14/03/2024',
    entry: '08:15',
    lunchOut: '12:00',
    lunchReturn: '13:00',
    exit: '17:15',
    total: '08:00'
  }
];

export default function ReportsScreen() {
  return (
    <div className={styles.containerWrapper}>
      <header className={styles.header}>
        <div>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Relatórios
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
          >
            Acompanhe seus registros de ponto
          </motion.p>
        </div>
      </header>

      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.statsContainer}>
          <StatsCard 
            label="Total de Horas" 
            value="160h" 
            icon={<FiClock size={24} />}
          />
          <StatsCard 
            label="Média Diária" 
            value="8h" 
            icon={<IoStatsChartOutline size={24} />}
          />
          <StatsCard 
            label="Dias Trabalhados" 
            value="20" 
            icon={<FiCalendar size={24} />}
          />
          <StatsCard 
            label="Relatório Completo" 
            value="Em breve" 
            icon={<FiFileText size={24} />}
          />
        </div>

        <div className={styles.listContent}>
          {mockTimeRecords.length > 0 ? (
            mockTimeRecords.map((record) => (
              <TimeRecordItem key={record.id} record={record} />
            ))
          ) : (
            <div className={styles.emptyContainer}>
              <p className={styles.emptyText}>Nenhum registro encontrado</p>
            </div>
          )}
        </div>
      </motion.div>
      <BottomNav />
    </div>
  );
}