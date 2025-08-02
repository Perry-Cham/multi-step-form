function Step_1({stage}){
  
  return(
  <div className={`form-step stage-one ${stage == 1 ? "show-step":
"hide-step"}`}>
    <h2 className="main-heading">Personal Information</h2>
    <p className="main-text">Please provide name, email address and phone
mumber</p>
    <label for="name">Name</label>
    <input name="name" type="text" placeholder="e.g Stephen King"/>
    <label for="address">Address</label>
    <input name="address" type="text" placeholder="e.g stephenking@lorem.com"/>
    <label for="phone-number">Phone number</label>
    <input name="phone-number" type="text"  placeholder="e.g +1 234 567 890"/>
  </div>
  )
}
export default Step_1
