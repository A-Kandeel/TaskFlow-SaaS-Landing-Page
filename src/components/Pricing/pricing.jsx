import { useState } from "react";
import SecHeader from "../secHeader";
import PricingCard from "./pricingCard";
import { pricing } from "../../data/pricing";

const Pricing = () => {
  const [billing, setBilling] = useState("annual");

  return (
    <section className="pricing container" id="pricing">
      <header>
        <SecHeader
          subtitle="Simple Pricing"
          title="Start small. Scale when the workflow earns it."
          desc=""
        />
        <div className="btn-box">
          <button
            className={`btn ${billing === "annual" ? "active" : ""}`}
            onClick={() => setBilling("annual")}
          >
            Annual <em>2 months free</em>
          </button>

          <button
            className={`btn ${billing === "monthly" ? "active" : ""}`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
        </div>
      </header>
      <div className="card-container">
        {pricing.map((data) => (
          <PricingCard
            key={data.id}
            {...data}
            price={
              typeof data.price === "object"
                ? data.price[billing]
                : data.price
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Pricing;
