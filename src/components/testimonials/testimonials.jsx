import SecHeader from "../secHeader";
import {testimonial} from "../../data/testimonial"
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  return (
    <section className="testimonials container">
      <SecHeader
          subtitle="WHAT TEAMS SAY"
          title="It should feel like leverage, not another tool."
          desc=""
        />
        <div className="testimonials-box">
          {testimonial.map((quote) => (
            <TestimonialCard
              key={quote.id}
              {...quote}
            />
          ))}
        </div>
    </section>
  );
}

export default Testimonials;