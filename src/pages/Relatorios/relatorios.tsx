import React from 'react';
import { motion } from 'framer-motion';
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

const TimeRecordItem = ({ record }: TimeRecordItemProps) => {
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
        <span className={styles.recordValue}>{record.entry || '--:--'}</span>
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Saída Almoço</span>
        <span className={styles.recordValue}>{record.lunchOut || '--:--'}</span>
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Retorno Almoço</span>
        <span className={styles.recordValue}>{record.lunchReturn || '--:--'}</span>
      </div>
      <div className={styles.recordRow}>
        <span className={styles.recordLabel}>Saída</span>
        <span className={styles.recordValue}>{record.exit || '--:--'}</span>
      </div>
      <div className={`${styles.recordRow} ${styles.totalRow}`}>
        <span className={styles.recordLabel}>Total</span>
        <span className={styles.recordValue}>{record.total || '--:--'}</span>
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
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
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