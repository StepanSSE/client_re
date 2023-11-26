import "./pomosh-pri-usherbe.css";
import PomoshPriUsherbeImg from "./images/pomosh-pri-usherbe.jpg";

let PomoshPriUsherbe= ({ changeState }) => {
  let setChangeState = () => {
    changeState("stateMain");
  };
  return (
    <div>
      <h3>PomoshPriUsherbe</h3>
      <img  src={PomoshPriUsherbeImg} alt="" />
      <p>
      PomoshPriUsherbe
      </p>
      <button onClick={setChangeState}>Назад</button>
    </div>
  );
}

export default PomoshPriUsherbe;
