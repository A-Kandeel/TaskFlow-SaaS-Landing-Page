import { useState } from "react";
import SecHeader from "../secHeader";
import Button from "../button";
import FAQCard from "./faqCard";
import { faq } from "../../data/faq";

const FaQ = () => {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return ( 
    <section className="faq container" id="FAQ">
      <header>
        <SecHeader
          subtitle="FAQ"
          title="Questions before you try it."
          desc="Everything here is written around the product concept, So feel free to get all knowledge about product."
        />
        <Button>Get Started</Button>
      </header>
      <div className="faq-list">
        {faq.map((data) => (
          <FAQCard
            key={data.id}
            {...data}
            isOpen={openId === data.id}
            onClick={() => handleToggle(data.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default FaQ;