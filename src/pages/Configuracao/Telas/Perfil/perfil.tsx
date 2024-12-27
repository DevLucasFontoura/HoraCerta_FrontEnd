import { FaUser, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import BottomNav from '../../../../components/Menu/menu';
import { useNavigate } from 'react-router-dom';
import styles from './perfil.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaUser size={200} color="rgba(0,0,0,0.03)" />
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
            <h1 className={styles.title}>Perfil</h1>
            <p className={styles.subtitle}>Gerencie suas informações pessoais</p>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.fieldContainer}>
            <div className={styles.labelContainer}>
              <FaUser className={styles.fieldIcon} />
              <label className={styles.label}>Nome completo</label>
            </div>
            <input
              className={`${styles.input} ${!isEditing ? styles.inputDisabled : ''}`}
              value={userData.name}
              onChange={(e) => setUserData({...userData, name: e.target.value})}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.fieldContainer}>
            <div className={styles.labelContainer}>
              <FaEnvelope className={styles.fieldIcon} />
              <label className={styles.label}>E-mail</label>
            </div>
            <input
              className={`${styles.input} ${!isEditing ? styles.inputDisabled : ''}`}
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              disabled={!isEditing}
              type="email"
            />
          </div>
        </section>

        <button 
          className={`${styles.actionButton} ${isEditing ? styles.saveButton : ''}`}
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "Salvar alterações" : "Editar perfil"}
        </button>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}