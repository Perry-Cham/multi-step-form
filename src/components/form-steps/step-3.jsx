function Step_3({ stage, planType, prices, addons }) {
  function handleAddon(e) {
    const newAddon = addons.find((addon) => addon === e.target.value);
    if (newAddon) addons.splice(addons.indexOf(e.target.value), 1);
    else addons.push(e.target.value.toLowerCase());
  }
  return (
    <div className={`form-step stage-three ${stage == 3 ? "show-step" : "hide-step"}`}>
      <h2 className="main-heading">Pick add-ons</h2>
      <p className="main-text">Addons enhance your gaming experience</p>
<article>
    <label className="online-service">
        <input type="checkBox" value="Online Services" onChange={(e) => handleAddon(e)} />
        <div className="wrapper">
          <h4>Online Service</h4>
          <p>Access to multiplayer games</p>
        </div>

        <p>
          ${prices["online services"]} {planType == "monthly" ? "/mo" : "/yr"}
        </p>
      </label>

      <label className="larger-storage">
        <input type="checkBox" value="Larger Storage" onChange={(e) => handleAddon(e)} />
        <div className="wrapper">
          <h4>Larger Storage</h4>
          <p>Extra 1TB of cloud save</p>
        </div>

        <p>
          ${prices["larger storage"]} {planType == "monthly" ? "/mo" : "/yr"}
        </p>
      </label>

      <label className="custom-profile">
        <input type="checkBox" value="Customizable Profile" onChange={(e) => handleAddon(e)} />
        <div className="wrapper">
          <h4>Customizable Profile</h4>
          <p>Custom theme on your profile</p>
        </div>

        <p>
          ${prices["customizable profile"]} {planType == "monthly" ? "/mo" : "/yr"}
        </p>
      </label>
      </article>

    </div>
  );
}
export default Step_3;
