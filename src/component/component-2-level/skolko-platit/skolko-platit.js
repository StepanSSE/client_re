import "./skolko-platit.css";
import SkolkoPlatitImg from "./images/skolko-platit.jpg";

let SkolkoPlatit = ({ changeState }) => {
  let setChangeState = () => {
    changeState("stateMain");
  };
  return (
    <div>
      <h3> SkolkoPlatitImg</h3>
      <img  src={SkolkoPlatitImg} alt="" />
      <p>
     
      PomoshVVyhode
      </p>
      <button onClick={setChangeState}>Назад</button>
    </div>
  );
}

export default SkolkoPlatit;
