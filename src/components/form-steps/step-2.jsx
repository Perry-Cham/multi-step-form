import {useState, useEffect} from 'react';
function Step_2({stage, handleChangePlanType, planType, prices,setPlan}){
  function handleChangePlan(e){
    setPlan(e.target.value)
  }
  return(
  <div className={`form-step stage-two ${stage == 2 ? "show-step": "hide-step"}`}>
    <h2>Select your Plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
    <label>
          <input name="plan" type="checkbox" value="Arcade" onChange={(e) => handleChangePlan(e)}/>
          <p>Arcade</p>
          <p>${prices.arcade2}{planType == "monthly"?"/mo":"/yr"}</p>
    </label>
    <label>
          <input name="plan" type="checkbox" value="Advanced" onChange={(e) => handleChangePlan(e)}/>
          <p>Advanced</p>
          <p>${prices.advanced}{planType == "monthly"?"/mo":"/yr"}</p>
    </label>
    <label>
          <input name="plan" type="checkbox" value="Pro" onChange={(e) => handleChangePlan(e)}/>
          <p>Pro</p>
          <p>${prices.pro}{planType == "monthly"?"/mo":"/yr"}</p>
    </label>
    
    <div className="plan-type-switcher">
      <p className={`mo ${planType == "monthly" ? "current-planType" : ""}`}>Monthly</p>
        <label className="switch">
  <input type="checkbox" value="monthly" onChange={handleChangePlanType}/>
  <span className="slider round"></span>
</label>
<p className={`yr ${planType == "yearly" ? "current-planType" : ""}`}>Yearly</p>
    </div>


  </div>)
}
export default Step_2