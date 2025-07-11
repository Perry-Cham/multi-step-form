import Step_Display_Step from "./I"
function Step_Display(stage){
return(
  <nav className="step-display">
<Step_Display_Step
number="1"
step="Step 1"
text="Your Info"
/>
<Step_Display_Step
number="2"
step="Step 2"
text="Select a Plan"
/>
<Step_Display_Step
number="3"
step="Step 3"
text="Addons"  
/>
<Step_Display_Step
number="4"
step="Step 4"
text="Summary"
/>
  </nav>
  )  
}
export default Step_Display