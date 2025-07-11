import {useState, useEffect} from 'react';
function Step_2({stage}){
  const [plan, setPlan] = useState('monthly')
  const [prices, setPrices] = useState({
    arcade:9,
    advanced:12,
    pro:15
  })
  useEffect(() => {
    if(plan === 'monthly'){
      let newPrices = {
        arcade:9,
    advanced:12,
    pro:15
      }
      setPrices(newPrices)
    }else{
      let newPrices = {
        arcade:9,
    advanced:12,
    pro:15
      }
      setPrices(newPrices)
    }
  }, [plan])
  return(
  <div className={`form-step ${stage == 2 ? "show-step": "hide-step"}`}>
    <h2>Select your plan</h2>
    <label>
          <input type="radio" value="Arcade"/>
          <p>`${prices.arcade}${plan == "monthly"?"/mo":"/yr"}`</p>
    </label>
    <label>
          <input type="radio" value="Advanced"/>
          <p>`${prices.advanced}${plan == "monthly"?"/mo":"/yr"}`</p>
    </label>
    <label>
          <input type="radio" value="Pro"/>
          <p>`${prices.pro}${plan == "monthly"?"/mo":"/yr"}`</p>
    </label>
    
  <label className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
</label>

  </div>)
}
export default Step_2