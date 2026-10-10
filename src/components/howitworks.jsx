const HowItWorks = () => {
  return (
    <section className="howItworks container">
      <h2>How It Works</h2>
      <div className="col-grid">
        <div className="col">
          <span>1</span>
          <h3>Create workspace</h3>
          <p className="desc">Set up your team's home in under a minute.</p>
        </div>
        <div className="col">
          <span>2</span>
          <h3>Invite team</h3>
          <p className="desc">Bring everyone in with a single shared link.</p>
        </div>
        <div className="col">
          <span>3</span>
          <h3>AI organizes your projects</h3>
          <p className="desc">TaskFlow sorts, prioritizes and schedules the work for you.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;