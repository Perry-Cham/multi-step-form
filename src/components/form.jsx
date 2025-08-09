import { useState, useEffect } from "react";
import Step_Display from "./step-display";
import Step_1 from "./form-steps/step-1";
import Step_2 from "./form-steps/step-2";
import Step_3 from "./form-steps/step-3";
import Step_4 from "./form-steps/step-4";

function Form() {
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name:"",
    address:"",
    phoneNumber:""
  })
  const [plan, setPlan] = useState("arcade");
  const [stage, setStage] = useState(1);
  const [planType, setPlanType] = useState("monthly");
  const [prices, setPrices] = useState({
    arcade: 9,
    arcade2: 9,
    advanced: 12,
    pro: 15,
    "online services": 1,
    "larger storage": 2,
    "customizable profile": 2
  });
  const [oldPrices, setOldPrices] = useState({ ...prices });
  const [submitted, setSubmitted] = useState(false);
  const [addons, setAddons] = useState([]);
  const handleChangePlanType = () => {
    planType === "monthly" ? setPlanType("yearly") : setPlanType("monthly");
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    validateInput()
    console.log(formData, errors)
    if(validateInput)return;
    setStage((prev) => prev + 1);
  };
  const handleGoBack = () => {
    setStage((prev) => prev - 1);
  };
  const validateInput= (e) => {
    let errors2 = {}
    let errormsg = "This field is required "
    if(formData.name.trim() === "") errors2.name = errormsg;
    if(formData.address.trim() === "") errors2.address = errormsg;
    if(formData.phoneNumber.trim() === "") errors2.phoneNumber = errormsg;
  setErrors(errors2)
  console.log(errors)
    errors.keys > 0 ? true: false;
  };
  const updateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const obj = {...formData, [name]:value}
    setFormData(obj)
  };
  useEffect(() => {
    if (planType == "yearly") {
      const newPrices = Object.entries(oldPrices).reduce((acc, [key, value]) => {
        acc[key] = value * 12;
        return acc;
      });
      setPrices(newPrices);
    } else {
      setPrices(oldPrices);
    }
  }, [planType]);
  return (
    <section className="form-container">
      <Step_Display currentStage={stage} />
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <Step_1 
        stage={stage}
        formData={formData}
        updateData={updateData}
        />
        <Step_2
          stage={stage}
          plan={plan}
          setPlan={setPlan}
          prices={prices}
          handleChangePlanType={handleChangePlanType}
          planType={planType}
        />
        <Step_3 stage={stage} planType={plan} prices={prices} addons={addons} />
        <Step_4
          stage={stage}
          plan={plan}
          planType={planType}
          prices={prices}
          addons={addons}
          setStage={setStage}
          submitted={submitted}
        />
        <div className="form-footer">
          {stage > 1 && (
            <button type="button" className="back-btn" onClick={handleGoBack}>
              Go Back
            </button>
          )}
          <button className="next-step-btn" type="submit">
            {stage < 4 ? "Next Step" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default Form;
