import "./poluchit-yurid-podder.css";
import PoluchitYuridPodderImg from "./images/poluchit-yurid-podder.jpg";

let PoluchitYuridPodder = ({ changeState }) => {
  let setChangeState = () => {
    changeState("stateMain");
  };
  return (
    <div>
      <h3> Юридическая служба</h3>
      <img  src={PoluchitYuridPodderImg} alt="" />
      <p>
     
У нас в штате молодые юристы с опытом работы в строительной сфере.
      </p>
      <button onClick={setChangeState}>Назад</button>
    </div>
  );
}

export default PoluchitYuridPodder;
