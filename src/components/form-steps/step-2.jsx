import {useState, useEffect} from 'react';
function Step_2({stage, handleChangePlanType, planType, prices,setPlan}){
  function handleChangePlan(e){
    console.log(e)
    setPlan(e.target.value)
  }
  return(
  <div className={`form-step stage-two ${stage == 2 ? "show-step": "hide-step"}`}>
    <h2>Select your Plan</h2>
    <label>
          <input type="checkbox" value="Arcade" onChange={(e) => handleChangePlan(e)}/>
          <p>Arcade</p>
          <p>${prices.arcade2} {planType == "monthly"?"/mo":"/yr"}</p>
    </label>
    <label>
          <input type="checkbox" value="Advanced" onChange={(e) => handleChangePlan(e)}/>
          <p>Advanced</p>
          <p>${prices.advanced} {planType == "monthly"?"/mo":"/yr"}</p>
    </label>
    <label>
          <input type="checkbox" value="Pro" onChange={(e) => handleChangePlan(e)}/>
          <p>Pro</p>
          <p>${prices.pro} {planType == "monthly"?"/mo":"/yr"}</p>
    </label>
    
  <label className="switch">
  <input type="checkbox" value="monthly" onChange={handleChangePlanType}/>
  <span className="slider round"></span>
</label>

  </div>)
}
export default Step_2