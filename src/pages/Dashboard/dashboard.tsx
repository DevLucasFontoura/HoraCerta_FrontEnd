import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LineChart from '../../components/LineChart/LineChart';
import BarChart from '../../components/BarChart/BarChart';
import BottomNav from '../../components/BottomNav/bottomNav';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Dashboard
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
          >
            Acompanhe suas horas trabalhadas
          </motion.p>
        </div>
      </header>

      <div className={styles.content}>
        {loading ? (
          <div className={styles.loading}>Carregando...</div>
        ) : (
          <div className={styles.grid}>
            <div className={styles.row}>
              <motion.section 
                className={styles.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className={styles.sectionTitle}>Horas Semanais</h2>
                <div className={styles.chartContainer}>
                  <LineChart 
                    data={[8, 7.5, 8.2, 6.5, 8]}
                    labels={['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']}
                    title="Horas Trabalhadas"
                  />
                </div>
              </motion.section>

              <motion.section 
                className={styles.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className={styles.sectionTitle}>Comparativo Mensal</h2>
                <div className={styles.chartContainer}>
                  <BarChart 
                    data={[40, 38, 42, 39]}
                    labels={['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']}
                    title="Horas por Semana"
                  />
                </div>
              </motion.section>
            </div>

            <div className={styles.row}>
              <motion.section 
                className={styles.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className={styles.sectionTitle}>Horas Extras</h2>
                <div className={styles.chartContainer}>
                  <LineChart 
                    data={[2, 1.5, 0, 1, 2]}
                    labels={['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']}
                    title="Horas Extras"
                  />
                </div>
              </motion.section>

              <motion.section 
                className={styles.section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className={styles.sectionTitle}>Banco de Horas</h2>
                <div className={styles.chartContainer}>
                  <BarChart 
                    data={[10, 8, 12, 6]}
                    labels={['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']}
                    title="Banco de Horas"
                  />
                </div>
              </motion.section>
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboard;