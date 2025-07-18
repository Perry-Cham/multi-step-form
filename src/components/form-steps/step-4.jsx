function Step_4({ planType, plan, addons, setStage, stage, prices, submitted }) {
  let addonCopy = addons.map((addon) => {
    return {
      name: addon,
      price: "",
      id: Math.random()
    };
  });
  addonCopy.forEach((addon) => (addon.price = prices[addon.name]));

  const totalUp = () => {
    const addonsTotal = addonCopy ? addonCopy.reduce((prev, curr) => prev + curr.price, 0) : 0;
    const p = plan.toLowerCase();
    return addonsTotal + prices[p];
  };

  return !submitted ? (
    <div className={`form-step stage-four ${stage == 4 ? "show-step" : "hide-step"}`}>
      <h2 className="stage-heading">Finishing Up</h2>
      <p className="stage-text">Double check if everything looks okay before continuing</p>

      <div className="summary-container">
        <div className="plan-summary">
          <div className="summary-wrapper">
            <h4 className="plan-header">
              {plan} ({planType})
            </h4>
            <button onClick={() => setStage(2)}>Change</button>
          </div>

          <p className="plan-price">+{prices[plan.toLowerCase()]}${planType == "monthly" ? "/mo" : "/yr"}</p>
        </div>

        {addonCopy &&
          addonCopy.map((addon) => (
            <div className="addon" key={addon.id}>
              <div class="addon-wrapper">
                <p className="addon-name">{addon.name}</p>
              </div>
              <p className="addon-price">+{addon.price}${planType == "monthly" ? "/mo" : "/yr"}</p>
            </div>
          ))}
        <div className="total-wrapper">
          <p className="total-text">Total ({planType == "monthly" ? "per month" : "per year"})</p>
           <p className="total-price">+{totalUp()}${planType == "monthly" ? "/mo" : "/yr"}</p>
        </div>

      </div>
    </div>
  ) : (
    <div className="Thank-you-screen form-step">
      <h2>Thank You</h2>
      <p>
        Thank you for confirming your subscription! We hope yiu have fun using our platform. If you ever need support
        feel free to email us at support@loregaming.com.
      </p>
    </div>
  );
}

export default Step_4;
