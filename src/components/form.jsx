import {useState} from 'react'
import Step_Display from './step-display'
import Step_1 from './form-steps/step-1'
import Step_2 from './form-steps/step-2'
import Step_3 from './form-steps/step-3'
import Step_4 from './form-steps/step-4'

function Form(){
  const [plan, setPlan] = useState('monthly')
  const [stage, setStage] = useState(1)
  const [price, setPrice] = useState({
      arcade:9,
      advanced:12,
      pro:15 
      })
  const  handleChangePlan = () => plan == 'monthly' ? setPlan('monthly') : setPlan('yearly');
  
  return(
    <>
    <Step_Display
    stage={stage}
    />
    <form className="form">
    <Step_1 
    stage={stage}
    />
    <Step_2
    stage={stage}
    plan={plan} 
    price={price}
    />
    <Step_3 
    stage={stage}
    plan={plan}
    price={price}
    />
    <Step_4
    stage={stage}
    plan={plan}
    price={price}
    />
  </form>
    </>

  )
}
export default Form;