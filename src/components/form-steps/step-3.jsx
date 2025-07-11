function Step_3({stage, plan}){
  return(
  <div className={`form-step ${stage == 3 ? "show-step": "hide-step"}`}>
    <h2>Pick add-ons</h2>
    <p>Addons enhance your gaming experience</p>
    
    <label>
      <input type="checkBox" value="Online Service" />
      <h4>Online Service</h4>
      <p>Access to multiplayer games</p>
    </label>
    
    <label>
    <input type="checkBox" value="Larger Storage" />
          <h4>Larger Storage</h4>
      <p>Extra 1TB of cloud save</p>
    </label>
    
    <label>
    <input type="checkBox" value="Customizable Profile" />
      <h4>Customizable Profile</h4>
      <p>Custom theme on your profile</p>
    </label>
  </div>)
}
export default Step_3