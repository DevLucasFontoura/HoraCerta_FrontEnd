
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import BottomNav from '../../../../components/Menu/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './perguntas.module.css';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como registrar meu ponto?",
    answer: "Na tela inicial, clique no botão + e selecione o tipo de registro (entrada, saída para almoço, retorno do almoço ou saída) e confirme o registro. O sistema registrará automaticamente o horário atual."
  },
  {
    question: "Como ajustar minha jornada de trabalho?",
    answer: "Acesse 'Ajustes' -> 'Jornada de Trabalho'. Lá você pode configurar sua carga horária diária e tempo de almoço conforme seu contrato de trabalho."
  },
  {
    question: "O que fazer se esquecer de registrar o ponto?",
    answer: "Em caso de esquecimento, você deve registrar o ponto normalmente, mas depois vá a página 'Relatórios' e edite o registro para o horário correto."
  },
  {
    question: "Como visualizar meu histórico de pontos?",
    answer: "Na tela inicial, acesse a seção 'Histórico Detalhado' para ver todos os seus registros."
  },
  {
    question: "Posso usar o app sem internet?",
    answer: "Sim, o app funciona offline para registros de ponto. Quando a conexão for restabelecida, os dados serão sincronizados automaticamente com o servidor."
  },
  {
    question: "Como funcionam as notificações?",
    answer: "O app pode te enviar lembretes diários nos horários configurados. Para ativar, vá em 'Ajustes' > 'Notificações' e configure conforme sua preferência."
  },
  {
    question: "O que fazer em caso de erro no registro?",
    answer: "Em caso de erro no registro, acesse: Ajustes → Ajuda → Suporte ao Cliente para obter orientações detalhadas."
  }
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onPress: () => void;
}

const AccordionItem = ({ item, isOpen, onPress }: AccordionItemProps) => {
  return (
    <div className={styles.accordionItem}>
      <button 
        className={styles.questionContainer} 
        onClick={onPress}
      >
        <span className={styles.question}>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown size={16} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answerContainer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className={styles.answer}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQScreen() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.backgroundIcon}>
        <FaChevronDown size={200} color="rgba(0,0,0,0.03)" />
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
            <h1 className={styles.title}>Perguntas Frequentes</h1>
            <p className={styles.subtitle}>Encontre respostas para as dúvidas mais comuns</p>
          </div>
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onPress={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </motion.div>
      
      <BottomNav />
    </div>
  );
}