import s from "./ContentMain.module.scss";
import Button from "../Button/Button";

function ContentMain() {
  return (
    <div className={s.main}>

      {/*LEFT BLOCK*/}
      <div className={s.mainHeading}>
        <h1>
          Зарабатывайте
          <br />
          больше
          <br />
          <strong>с&nbsp;WELBEX</strong>
        </h1>
        <h3>
          Развиваем и&nbsp;контролируем
          <br />
          продажи за&nbsp;вас
        </h3>
      </div>

      {/*RIGHT BLOCK*/}
      <div className={s.mainSide}>
        <h3>
          Вместе с{" "}
          <strong>
            бесплатной
            <br />
            консультацией
          </strong>{" "}
          мы&nbsp;дарим:
        </h3>

        <div className={s.grid}>
          <div>
            <h3>Виджеты</h3>
            <p>
              30&nbsp;готовых
              <br />
              решений
            </p>
          </div>
          <div>
            <h3>Dashboard</h3>
            <p>
              с&nbsp;показателями
              <br />
              вашего бизнеса
            </p>
          </div>
          <div>
            <h3>Skype Аудит</h3>
            <p>
              отдела продаж
              <br />
              и&nbsp;CRM системы
            </p>
          </div>
          <div>
            <h3>35&nbsp;дней</h3>
            <p>
              использования
              <br />
              CRM
            </p>
          </div>
        </div>

        <Button text="Получить консультацию" />
      </div>
    </div>
  );
}

export default ContentMain;
