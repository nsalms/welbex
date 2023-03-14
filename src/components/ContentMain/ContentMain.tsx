import s from './ContentMain.module.scss'

function ContentMain() {

    return (
        <div className={s.main}>
            <div className={s.mainHeading}>
                <h1>
                    Зарабатывайте<br/>
                    больше<br/>
                    <strong>с&nbsp;WELBEX</strong>
                </h1>
                <h3>Развиваем и&nbsp;контролируем<br/>
                    продажи за&nbsp;вас</h3>
            </div>

            <div className={s.mainSide}>
                <h3>
                    Вместе с <strong>бесплатной<br/>консультацией</strong> мы&nbsp;дарим:
                </h3>

                <div className={s.grid}>
                    <div>
                        <h3>Виджеты</h3>
                        30&nbsp;готовых<br/>решений
                    </div>
                    <div>
                        <h3>Dashboard</h3>
                        с&nbsp;показателями<br/>вашего бизнеса
                    </div>
                    <div>
                        <h3>Skype Аудит</h3>
                        отдела продаж<br/>и&nbsp;CRM системы
                    </div>
                    <div>
                        <h3>35&nbsp;дней</h3>
                        использования<br/>CRM
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ContentMain