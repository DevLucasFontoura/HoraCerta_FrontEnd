import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineClockCircle, AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      navigate('/bemVindo');
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
        
        <h1 className={styles.title}>Bem-vindo de volta</h1>
        <p className={styles.subtitle}>Faça login para continuar</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Senha</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <a href="#" className={styles.forgotPassword}>
            Esqueceu sua senha?
          </a>

          <button 
            className={styles.submitButton} 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar →'}
          </button>
        </form>

        <p className={styles.footer}>
          Ainda não tem uma conta?{' '}
          <Link to="/registro" className={styles.link}>
            Criar conta gratuita
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;