import "./predostavim-specialistov.css";
import PredostavimSpecialistovImg from "./images/predostavim-specialistov.jpg";

let PredostavimSpecialistov= ({ changeState }) => {
  let setChangeState = () => {
    changeState("stateMain");
  };
  return (
    <div>
      <h3>PredostavimSpecialistov</h3>
      <img  src={PredostavimSpecialistovImg} alt="" />
      <p>
      PredostavimSpecialistov
      </p>
      <button onClick={setChangeState}>Назад</button>
    </div>
  );
}

export default PredostavimSpecialistov;
