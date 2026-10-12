import {Star} from "lucide-react";

const TestimonialCard = ({ review, comment, avatar, name, title }) => {
  return (
    <article className="card">
      <div className="stars">
        {Array.from({ length: review }, (_, index) => (
          <Star
            key={index}
            fill="currentColor"
            size={18}
          />
        ))}
      </div>
      <p className="comment">{comment}</p>
      <div className="user">
        <div className="avatar">{avatar}</div>
        <div className="person">
          <strong>{name}</strong>
          <span>{title}</span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;