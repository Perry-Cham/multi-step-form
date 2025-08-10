function Step_5({stage}){
  return(
  <div className={`stage-five form-step ${stage === 5 ? "show-step": "hide-step"}`}>
    <div className="wrapper">
        <div className="hero-section">
      <img src="/images/icon-thank-you.svg"/>
      <h2>Thank You</h2>
    </div>
    <p className="main-text">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com.</p>
    </div>
  
  </div>)
}

export default Step_5;