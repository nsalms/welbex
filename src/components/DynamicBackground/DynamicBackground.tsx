import s from "./DynamicBackground.module.scss";

function DynamicBackground() {
  return (
    <div className={s.dynamicBackground}>
      <div className={s.purpleBall}></div>
      <div className={s.redBall}></div>
      <div className={s.redBall2}></div>
      <div className={s.purpleLight}></div>
      <div className={s.redLight}></div>
    </div>
  );
}

export default DynamicBackground;
