function Step_4({planType,plan,addons,setStage,stage,prices, submitted}){
  
  let addonCopy = addons.map(addon => {
    return {
      name:addon,
      price:"",
      id:Math.random()
    }
  } )
  addonCopy.forEach((addon) => addon.price = prices[addon.name])
  
  const totalUp = () => {
 const addonsTotal = addonCopy ? addonCopy.reduce((prev, curr) => prev + curr.price, 0) : 0;
 console.log(prices, plan)
 const p = plan.toLowerCase()
 return addonsTotal + prices[p]
  }
  
const total = totalUp();
  return(
!submitted ? (
  <div className={`form-step ${stage == 4 ? "show-step": "hide-step"}`}>
    <h2 className="stage-heading">Finishing Up</h2>
    <p className="stage-text">Double check if everything looks okay before continuing</p>
    
    <div className="summary-container">
      
      <div className="plan-summary">
        <div>
          <h4>{plan} ({planType})</h4>
          <button onClick={() => setStage(2)}>Change</button>
        </div>
        
        <p>{prices[plan.toLowerCase()]}</p>
      </div>
      
      {addonCopy && addonCopy.map(addon => (
        <div className="Addon" key={addon.id}>
          <p>{addon.name}</p>
          <p>{addon.price}</p>
        </div>))}
        <p>{totalUp()}</p>
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