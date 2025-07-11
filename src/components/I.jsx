function Step_Display_Step({number, step, text}){
  return(    <div>
 <span className="nav-indicator">{number}</span>
  <div>
    <p  className="nav-heading">{step}</p>
    <p   className="nav-text">{text}</p>
  </div>
    </div>)
}
export default Step_Display_Step