import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaChartBar, FaEdit, FaTachometerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './tutorial.module.css';
import BottomNav from '../../../../components/Menu/menu';

const tutorialSteps = [
  {
    title: 'Registrar Ponto',
    description: 'Registre sua entrada, saída para almoço, retorno do almoço e saída do trabalho com apenas um toque.',
    icon: <FaClock size={32} />,
    color: '#666666'
  },
  {
    title: 'Visualizar Registros',
    description: 'Acompanhe seus registros diários, semanais e mensais através de gráficos e relatórios detalhados.',
    icon: <FaChartBar size={32} />,
    color: '#666666'
  },
  {
    title: 'Editar Registros',
    description: 'Se necessário, você pode editar registros anteriores com facilidade.',
    icon: <FaEdit size={32} />,
    color: '#666666'
  },
  {
    title: 'Dashboard',
    description: 'Visualize suas métricas e estatísticas de forma clara e intuitiva.',
    icon: <FaTachometerAlt size={32} />,
    color: '#666666'
  }
];

export default function TutorialScreen() {
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
            <h1 className={styles.title}>Bem-vindo ao HoraCerta</h1>
            <p className={styles.subtitle}>Aprenda a usar todas as funcionalidades</p>
          </div>
        </div>

        <section className={styles.section}>
          {tutorialSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.tutorialStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconContainer} style={{ color: step.color }}>
                {step.icon}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}