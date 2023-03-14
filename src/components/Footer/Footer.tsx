import s from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footerNav}>
          <div className={s.footerNavCol}>
            <h4>О компании</h4>
            <ul className="menu-vectical">
              <li>
                <a href="#">Партнёрская программа</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
            </ul>
          </div>

          <div className={s.footerNavCol}>
            <h4>Меню</h4>
            <ul className="menu-vectical">
              <li>
                <a href="#">Расчёт стоимости</a>
              </li>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Виджеты</a>
              </li>
              <li>
                <a href="#">Интеграции</a>
              </li>
              <li>
                <a href="#">Наши клиенты</a>
              </li>
              <li>
                <a href="#">Кейсы</a>
              </li>
              <li>
                <a href="#">Благодарственные письма</a>
              </li>
              <li>
                <a href="#">Сертификаты</a>
              </li>
              <li>
                <a href="#">Блог на Youtube</a>
              </li>
              <li>
                <a href="#">Вопрос / Ответ</a>
              </li>
            </ul>
          </div>

          <div className={s.footerNavCol}>
            <h4>Контакты</h4>
            <ul className="menu-vectical menu-wide">
              <li>
                <a href="tel:75555555555">+7&nbsp;555&nbsp;555-55-55</a>
              </li>
              <li>
                <ul className="menu-horizontal menu-dense">
                  <li>
                    <a href="#">
                      <span className="icon icon-telegram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-viber"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-whatsapp"></span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Москва, Путевой проезд 3с1, к 902</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.footerLegal}>
          <p>©WELBEX 2022. Все права защищены.</p>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
