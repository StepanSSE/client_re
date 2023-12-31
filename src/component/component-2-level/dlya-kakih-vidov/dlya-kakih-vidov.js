import "./dlya-kakih-vidov.css";
import DlyaKakihVidovImg from "./images/dlya-kakih-vidov.jpg";

let DlyaKakihVidov = ({ changeState }) => {
  let setChangeState = () => {
    changeState("stateMain");
  };
  return (
    <div>
      <h3> Для каких видов строительства не нужно вступление в СРО</h3>
      <img  src={DlyaKakihVidovImg} alt="" />
      <p>
     
По действующему законодательству для проведения некоторых видов строительных работ нужно состоять в СРО — организациях строителей, которые регулируются самостоятельно. Они и занимаются выдачей новых типов лицензий на строительство зданий и сооружений.
Замена лицензии на СРО было принято неоднозначно среди строительных компаний.
Перечень тех работ, для которых требуется членство в СРО, установлен приказом №624, от 30 декабря 2009 года. Градостроительный кодекс РФ и рекомендации ФГУ “Главгосэкспертизы России” — еще два правовых документа, поясняющие виды строительных работ, для которых потребуется вступление в СРО.
Сначала рассмотрим список тех случаев, когда получение лицензии на осуществление строительной деятельности через СРО не нужно. Он представлен в ст.51 ГК РФ, п.1-5 и п.17:
    • для постройки домов, предназначенных для одной семьи (здания должны располагаться обособленно и иметь не более 3х этажей);
    • при проектировании блочных домов с общим числом самих блоков — не более 10 (один блок должен быть рассчитан на одну семью и иметь несколько стенок с соседним зданием. Еще одно требование — его строительство должно вестись на личной земле с выходом на землю общего пользования. Установлено и количество этажей для него — не более 3);
    • для сооружений производственного назначения, занимающих площадь в 1500 кв. м и являющихся объектами кап. строительства.
В последнем случае здания такого рода не должны требовать организации санитарно-защитной зоны. Из всех правил есть исключения, поэтому и из этого они есть — объекты кап. строительства, которые признаны опасными, слишком сложными с технической точки зрения или уникальными. Подобное исключение представлено в ст.48 ч.1 ГК РФ.
Только ряд строительных работ требуют вступления в СРО.
Согласно приказу №294 от 23 июля 2010 года, был определен еще один список строительных работ, при которых членство в СРО не является необходимым условием:
    • все типы остекления;
    • отделки гипсокартоном;
    • штукатурные и облицовочные работы;
    • все виды отделочных работ;
    • земляные работы и т.д.;
    • установка ворот и пр.;
    • малярные, а также грунтовые работы;
    • ремонт дорожных покрытий.

К тем видам строительства, для которых членство в СРО тоже не определено на законодательном уровне, относятся:
    • установка конструкций из дерева для готовых фундаментов небольших объектов строительства (сюда не относятся мембранные покрытия, висячие конструкции и т.д.);
    • работы с внутренними сетями сооружений, которые не классифицируются, как опасные или уникальные;
    • кровельные/каменные работы, а также с фасадами (вышеуказанное условие действует и для них);
    • геодезические работы на тех же объектах;
    • типы защитных работ на строительных площадках, трубопроводе и т.д. (исключение составляют магистральные и промысловые);
    • выполнение частичных работ по приготовлению строительных площадок под здания, которые не определяются, как опасные или уникальные.
Перечень — довольно обширный, но для каких работ все-таки нужно вступать в СРО для получения лицензирования в строительстве.
      </p>
      <button onClick={setChangeState}>Назад</button>
    </div>
  );
}

export default DlyaKakihVidov;
