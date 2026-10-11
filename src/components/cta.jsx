import SecHeader from "./secHeader";
import Button from "./button";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-overlay container">
        <div className="glow"></div>
        <SecHeader
          subtitle="YOUR NEXT WORKFLOW"
          title="Give the team a better starting point."
          desc="Bring one messy recurring task. Leave with a workflow worth reusing."
        />
        <Button>Start Free</Button>
      </div>
    </section>
  );
}

export default CTA;