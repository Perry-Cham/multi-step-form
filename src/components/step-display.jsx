import Step_Display_Step from "./I";
function Step_Display({ currentStage }) {
  return (
    <nav className="step-display">
      <Step_Display_Step number="1" step="Step 1" text="Your Info" stage={currentStage} />
      <Step_Display_Step number="2" step="Step 2" text="Select Plan"
stage={currentStage} />
      <Step_Display_Step number="3" step="Step 3" text="Add-ons"
stage={currentStage} />
      <Step_Display_Step number="4" step="Step 4" text="Summary" stage={currentStage} />
    </nav>
  );
}
export default Step_Display;
