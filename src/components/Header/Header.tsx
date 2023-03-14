import s from './Header.module.scss'
import logo from '../../assets/img/logo_welbex.svg'

function Header() {
    return (
        <nav className={s.header}>
            <div className={s.logo}>
                <img className={s.logo__image} src={logo} alt="" width="140"/>
                <h6 className={s.logo__sub}>крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё 8&nbsp;странах</h6>
            </div>
            <ul className={s.menu}>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Виджеты</a></li>
                <li><a href="#">Интеграции</a></li>
                <li><a href="#">Кейсы</a></li>
                <li><a href="#">Сертификаты</a></li>
            </ul>
            <div className={s.contacts}>
                <div className={s.contacts__tel}>+7&nbsp;555&nbsp;555-55-55</div>
                <ul className={s.menu}>
                    <li><span className="icon icon-telegram"></span></li>
                    <li><span className="icon icon-viber"></span></li>
                    <li><span className="icon icon-whatsapp"></span></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
