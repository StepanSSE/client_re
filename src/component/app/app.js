import { useState } from "react";
import "./app.css";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import Menu from "../menu/menu";
import AnalizSRO from "../component-2-level/analiz-SRO";
import BystroSoberem from "../component-2-level/bystro-soberem";
import PredostavimSpecialistov from "../component-2-level/predostavim-specialistov/predostavim-specialistov";
import DlyaKakihVidov from "../component-2-level/dlya-kakih-vidov";
import PomoshPriUsherbe from "../component-2-level/pomosh-pri-usherbe";
import PoluchitYuridPodder from "../component-2-level/poluchit-yurid-podder";
import PomoshVVyhode from "../component-2-level/pomosh-v-vyhode";
import SkolkoPlatit from "../component-2-level/skolko-platit";
import MojnoNeOform from "../component-2-level/mojno-ne-oform";

let App = () => {
  const [pageState, setPageState] = useState("");
  let changeState = (newState) => {
    setPageState(newState);
  };

  switch (pageState) {
    case "stateAnalizSRO":
      return (
        <div>
          <AnalizSRO changeState={changeState} />
        </div>
      );
      break;
    case "stateBystroSoberem":
      return (
        <div>
          <BystroSoberem changeState={changeState} />
        </div>
      );
      break;
    case "statePredostavimSpecialistov":
      return (
        <div>
          <PredostavimSpecialistov changeState={changeState} />
        </div>
      );
      break;

    case "stateDlyaKakihVidov":
      return (
        <div>
          <DlyaKakihVidov changeState={changeState} />
        </div>
      );
      break;
    case "statePomoshPriUsherbe":
      return (
        <div>
          <PomoshPriUsherbe changeState={changeState} />
        </div>
      );
      break;
    case "statePoluchitYuridPodder":
      return (
        <div>
          <PoluchitYuridPodder changeState={changeState} />
        </div>
      );
      break;
    case "statePomoshVVyhode":
      return (
        <div>
          <PomoshVVyhode changeState={changeState} />
        </div>
      );
      break;
    case "stateSkolkoPlatit":
      return (
        <div>
          <SkolkoPlatit changeState={changeState} />
        </div>
      );
      break;
    case "stateMojnoNeOform":
      return (
        <div>
          <MojnoNeOform changeState={changeState} />
        </div>
      );
      break;

    default:
      return (
        <div>
          <Header />
          <Menu />
          <Main changeState={changeState} />
        </div>
      );
  }
};

export default App;
