import s from './Header.module.scss'
import logo from '../../assets/img/logo_welbex.svg'

function Header() {
    return (
        <nav className={s.header}>
            <div className={s.logo}>
                <a href="/"><img className={s.logo__image} src={logo} alt="" width="140"/></a>
                <h6 className={s.logo__sub}>крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё 8&nbsp;странах</h6>
            </div>
            <ul className="menu-horizontal">
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Виджеты</a></li>
                <li><a href="#">Интеграции</a></li>
                <li><a href="#">Кейсы</a></li>
                <li><a href="#">Сертификаты</a></li>
            </ul>
            <div className={s.contacts}>
                <div className={s.contacts__tel}>
                    <a href="tel:75555555555">+7&nbsp;555&nbsp;555-55-55</a>
                </div>
                <ul className="menu-horizontal">
                    <li><a href="#"><span className="icon icon-telegram"></span></a></li>
                    <li><a href="#"><span className="icon icon-viber"></span></a></li>
                    <li><a href="#"><span className="icon icon-whatsapp"></span></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
