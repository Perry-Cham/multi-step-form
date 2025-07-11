function Step_1({stage}){
  console.log(stage)
  return(
  <div className={`form-step ${stage == 1 ? "show-step": "hide-step"}`}>
    <h2>Personal Information</h2>
    <p>Please provide name, email address and phone mumber</p>
    <label for="name">Name</label>
    <input name="name" placeholder="e.g Stephen King"/>
    <label for="address">Address</label>
    <input name="address" placeholder="e.g stephenking@lorem.com"/>
    <label for="phone-number">Phone number</label>
    <input name="phone-number" placeholder="+1 234 567 890"/>
  </div>
  )
}
export default Step_1