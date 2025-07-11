function Step_4({planType,plan,addons,setStage,stage,prices, submitted}){
  return(
submitted ? (
  <div className={`form-step ${stage == 3 ? "show-step": "hide-step"}`}>
    <h2 className="stage-heading">Finishing Up</h2>
    <p className="stage-text">Double check if everything looks okay before continuing</p>
    
    <div className="summary-container">
      
      <div className="plan-summary">
        <div>
          <h4>{`${plan} ${planType === "monthly" ? "(monthly)" : "(yearly)"}`}</h4>
          <button onClick={() => setStage(2)}>Change</button>
        </div>
        
        <p>{prices.arcade}</p>
      </div>
      
      {addons && addons.map(addon => (
        <div className="Addon" key={addon.id}>
          <p>{addon.name}</p>
          <p>{addon.price}</p>
        </div>))}
        
    </div>
  </div>
      )
     : (
        <div className="Thank-you-screen form-step">
          <h2>Thank You</h2>
        <p>Thank you for confirming your subscription! We hope yiu have fun using our platform. If you ever need support feel free to email us at support@loregaming.com.</p>
        </div>
        ))
  
}

export default Step_4