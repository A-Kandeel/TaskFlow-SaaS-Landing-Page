function SecHeader({ title, subtitle, desc}) {
  return (
    <div className="sec-header">
      <span>{subtitle}</span>
      <h2>{title}</h2>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default SecHeader;
