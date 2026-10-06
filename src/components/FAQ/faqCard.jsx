import { LucideChevronDown, LucideChevronUp } from "lucide-react";

const FAQCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <article className="faq-item">
      <button
        onClick={onClick}
      >
        <span className="text">{question}</span>
        {isOpen ? <LucideChevronDown /> : <LucideChevronUp />}
        
      </button>
      {isOpen && (
      <p className="desc">{answer}</p>
      )}
    </article>
  );
};


export default FAQCard;