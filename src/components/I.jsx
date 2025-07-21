function Step_Display_Step({ number, step, text, stage }) {
  return (
    <div className={`step-display-step `}>
      <span className={`nav-indicator ${stage == number ? "active-step" : ""}`}>{number}</span>
      <div className="step-wrapper">
        <p className="nav-heading">{step}</p>
        <p className="nav-text">{text}</p>
      </div>
    </div>
  );
}
export default Step_Display_Step;
