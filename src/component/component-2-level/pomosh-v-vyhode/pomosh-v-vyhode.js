import "./pomosh-v-vyhode.css";
import PomoshVVyhodeImg from "./images/pomosh-v-vyhode.jpg";

let PomoshVVyhode = ({ changeState }) => {
  let setChangeState = () => {
    changeState("stateMain");
  };
  return (
    <div>
      <h3> PomoshVVyhode</h3>
      <img  src={PomoshVVyhodeImg} alt="" />
      <p>
     
      PomoshVVyhode
      </p>
      <button onClick={setChangeState}>Назад</button>
    </div>
  );
}

export default PomoshVVyhode;
