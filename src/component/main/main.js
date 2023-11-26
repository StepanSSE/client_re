import "./main.css";

let Main = ({ changeState }) => {
  let setChangeStateAnalizSRO = () => {
    changeState("stateAnalizSRO");
  };
  let setChangeStateBystroSoberem = () => {
    changeState("stateBystroSoberem");
  };
  let setChangeStatePredostavimSpecialistov= () => {
    changeState("statePredostavimSpecialistov");
  };
  let setChangeStateDlyaKakihVidov= () => {
    changeState("stateDlyaKakihVidov");
  };
  let setChangeStatePomoshPriUsherbe= () => {
    changeState("statePomoshPriUsherbe");
  };
  let setChangeStatePoluchitYuridPodder= () => {
    changeState("statePoluchitYuridPodder");
  };
  let setChangeStatePomoshVVyhode= () => {
    changeState("statePomoshVVyhode");
  };
  let setChangeStateSkolkoPlatit= () => {
    changeState("stateSkolkoPlatit");
  };
  let setChangeStateMojnoNeOform= () => {
    changeState("stateMojnoNeOform");
  };


  return (
    <div>
      <h3>Проведем анализ СРО</h3>
      <p>
        Наши квалифицированные специалисты проведут анализ саморегулируемых
        организаций в вашем регионе
      </p>
      <button onClick={setChangeStateAnalizSRO}>Подробнее</button>

      <h3>Быстро соберем пакет документов</h3>
      <p>Узнать о документах для оформления строительной лицензии подробнее</p>
      <button onClick={setChangeStateBystroSoberem}>Узнать</button>

      <h3>Предоставим своих специалистов</h3>
      <p></p>
      <button onClick={setChangeStatePredostavimSpecialistov}>Смотреть</button>

      <h3>Для каких видов работ не нужно вступление в СРО</h3>
      <p></p>
      <button onClick={setChangeStateDlyaKakihVidov}>Смотреть</button>
 
      <h3>Помощь при ущербе</h3>
      <p>Получить помощь в реализации обеспечительного механизма при причененном ущербе в процессе деятельности</p>
      <button onClick={setChangeStatePomoshPriUsherbe}>Узнать</button>

      <h3>Получить юредическую поддержку</h3>
      <p></p>
      <button onClick={setChangeStatePoluchitYuridPodder}>Узнать</button>

      <h3>Помощь в выходе из объединения</h3>
      <p></p>
      <button onClick={setChangeStatePomoshVVyhode}>Узнать</button>
      
      <h3>Сколько платить</h3>
      <p></p>
      <button onClick={setChangeStateSkolkoPlatit}>Посчетать</button>

      <h3>Можно не оформлять ?</h3>
      <p></p>
      <button onClick={setChangeStateMojnoNeOform}>Узнать</button>

      
    </div>
  );
}

export default Main;
