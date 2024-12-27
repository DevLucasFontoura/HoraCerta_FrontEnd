import { AiOutlineClockCircle, AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import styles from './registro.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      navigate('/home');
    }, 500);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        <AiOutlineArrowLeft size={20} />
        <span>Voltar</span>
      </Link>
      
      <div className={styles.gradient} />
      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.logoContainer}>
          <AiOutlineClockCircle size={32} />
          <span className={styles.logoText}>HoraCerta</span>
        </div>
        
        <h1 className={styles.title}>Crie sua conta</h1>
        <p className={styles.subtitle}>Comece a controlar seu tempo de forma inteligente</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nome completo</label>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Senha</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              required
            />
          </div>

          <button 
            className={styles.submitButton} 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta →'}
          </button>
        </form>

        <p className={styles.footer}>
          Já tem uma conta?{' '}
          <Link to="/login" className={styles.link}>
            Fazer login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;