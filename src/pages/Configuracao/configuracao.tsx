import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBell, FaClock, FaCalendar, FaBook, FaQuestionCircle, 
         FaHeadset, FaLock, FaInfoCircle, FaCog } from 'react-icons/fa';
import styles from './configuracao.module.css';
import { motion } from 'framer-motion';
import BottomNav from '../../components/Menu/menu';

// Mock user settings type
interface UserSettings {
  notifications: boolean;
  emailReports: boolean;
  workSchedule: {
    workTime: number;
    lunchTime: number;
  };
}

export default function SettingsScreen() {
  const navigate = useNavigate();
  const [userSettings, setUserSettings] = useState<UserSettings>({
    notifications: false,
    emailReports: false,
    workSchedule: {
      workTime: 8,
      lunchTime: 1
    }
  });

  // Mock user data loading
  useEffect(() => {
    // Simulate loading user settings from an API
    const mockUserSettings = {
      notifications: true,
      emailReports: true,
      workSchedule: {
        workTime: 8,
        lunchTime: 1
      }
    };
    setUserSettings(mockUserSettings);
  }, []);

  const settingsOptions = {
    profile: [
      {
        title: 'Perfil',
        icon: <FaUser />,
        description: 'Visualize e edite suas informações',
        onPress: () => navigate('/configuracao/telas/perfil')
      }
    ],
    preferences: [
      {
        title: 'Notificações',
        icon: <FaBell />,
        description: 'Configure suas notificações',
        onPress: () => navigate('/configuracao/telas/notificacoes')
      },
      {
        title: 'Jornada de Trabalho',
        icon: <FaClock />,
        description: 'Ajuste sua jornada de trabalho',
        onPress: () => navigate('/configuracao/telas/jornada')
      },
      {
        title: 'Feriados e Compensações',
        icon: <FaCalendar />,
        description: 'Gerencie feriados que afetam sua jornada',
        onPress: () => navigate('/configuracao/telas/feriados')
      }
    ],
    help: [
      {
        title: 'Tutorial do App',
        icon: <FaBook />,
        description: 'Aprenda a usar todas as funcionalidades',
        onPress: () => navigate('/configuracao/telas/tutorial')
      },
      {
        title: 'Perguntas Frequentes',
        icon: <FaQuestionCircle />,
        description: 'Encontre respostas para dúvidas comuns',
        onPress: () => navigate('/configuracao/telas/perguntas')
      },
      {
        title: 'Suporte ao Cliente',
        icon: <FaHeadset />,
        description: 'Entre em contato com nossa equipe',
        onPress: () => navigate('/configuracao/telas/suporte')
      }
    ],
    about: [
      {
        title: 'Política de Privacidade',
        icon: <FaLock />,
        description: 'Leia nossa política de privacidade',
        onPress: () => navigate('/configuracao/telas/politica')
      },
      {
        title: 'Sobre o App',
        icon: <FaInfoCircle />,
        description: 'Informações sobre o aplicativo',
        onPress: () => navigate('/configuracao/telas/sobre')
      }
    ]
  };

  const handleLogout = () => {
    // Mock logout functionality
    console.log('Logout clicked');
    navigate('/screens/InitialScreen');
  };

  const handleDeleteAccount = () => {
    // Mock delete account functionality
    console.log('Delete account clicked');
  };

  const renderSection = (title: string, icon: React.ReactNode, options: any[]) => (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>{icon}</div>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {options.map((option, index) => (
        <button 
          key={index} 
          className={styles.settingItem} 
          onClick={option.onPress}
        >
          <div className={styles.settingInfo}>
            <span className={styles.settingIcon}>{option.icon}</span>
            <div className={styles.settingTextContainer}>
              <h3 className={styles.settingLabel}>{option.title}</h3>
              <p className={styles.settingDescription}>{option.description}</p>
            </div>
          </div>
        </button>
      ))}
    </motion.section>
  );

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaClock size={200} color="rgba(0,0,0,0.03)" />
      </div>
      
      <div className={styles.container}>
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>Ajustes</h1>
          <p className={styles.subtitle}>Gerencie suas preferências</p>
        </motion.header>

        <div className={styles.content}>
          {renderSection('Perfil', <FaUser size={24} />, settingsOptions.profile)}
          {renderSection('Preferências', <FaCog size={24} />, settingsOptions.preferences)}
          {renderSection('Ajuda', <FaQuestionCircle size={24} />, settingsOptions.help)}
          {renderSection('Sobre', <FaInfoCircle size={24} />, settingsOptions.about)}

          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.dangerZone}>
              <h3 className={styles.dangerTitle}>Zona de Perigo</h3>
              <p className={styles.dangerDescription}>
                Ações que requerem atenção especial
              </p>
              <button 
                className={styles.dangerButton} 
                onClick={handleDeleteAccount}
              >
                Excluir Conta
              </button>
            </div>
          </motion.section>

          <button 
            className={`${styles.outlineButton} ${styles.logoutButton}`}
            onClick={handleLogout}
          >
            Sair do Aplicativo
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}