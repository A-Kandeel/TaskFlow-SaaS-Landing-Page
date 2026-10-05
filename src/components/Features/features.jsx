import SecHeader from "../secHeader";
import FeaturesCard from "./featuresCard";
import { features } from "../../data/features";

const Features = () => {
  return (
    <div className="features container" id="Features">
      <SecHeader
        subtitle="The TaskFlow Difference"
        title="Everything you need to manage work"
        desc="
        Not another tab for one-off prompts. TaskFlow keeps context close to the workflow, 
        so the output becomes more useful each time.
        "
      />
      <div className="card-container">
        {features.map((feature) => (
          <FeaturesCard
            key={feature.id}
            {...feature}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
