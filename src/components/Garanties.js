import checked from '../assets/img/garanties/checked.svg'
import scissors from '../assets/img/garanties/scissors.svg'
import metro from '../assets/img/garanties/metro.svg'
import toast from '../assets/img/garanties/toast.svg'
import yellow from '../assets/img/garanties/yellow_arrow.svg'
import red from '../assets/img/garanties/red_arrow.svg'
import blue from '../assets/img/garanties/blue_arrow.svg'

function Garanties() {
    return (
        <div className="garanties">
            <div className="content">
                <h2 className="module-title">Доверьте работу над красотой именно нам!</h2>
                <div className="garanties-container">
                    <div id="gci-1" className="garanties-container__item">
                        <div className="garanties-container__item-img__block">
                            <img src={checked} alt=""/>
                        </div>
                        <div className="garanties-container__item-info">
                            <p className="garanties-container__item-info__title">Гарантия на покрытие - N дней</p>
                            <p className="garanties-container__item-info__description">Переделаем покрытие бесплатно в течение N дней после маникюра или педикюра, если с ним что-то случится</p>
                        </div>
                    </div>
                    <div id="gci-2" className="garanties-container__item">
                        <div className="garanties-container__item-img__block">
                            <img src={scissors} alt=""/>
                        </div>
                        <div className="garanties-container__item-info">
                            <p className="garanties-container__item-info__title">Профилактические меры</p>
                            <p className="garanties-container__item-info__description">Мы безоговорочно следуем указам Роспотребнадзора и заботимся о клиентах и сотрудниках</p>
                            <a className="garanties-container__item-info__link" href="/">
                                <p id="link-text-1" className="garanties-container__item-info__link-text">Подробнее</p>
                                <img src={yellow} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div id="gci-3" className="garanties-container__item">
                        <div className="garanties-container__item-img__block">
                            <img src={metro} alt=""/>
                        </div>
                        <div className="garanties-container__item-info">
                            <p className="garanties-container__item-info__title">Студия в сердце столицы</p>
                            <p className="garanties-container__item-info__description">Салон красоты бизнес-класса центре Москвы у метро «Белорусская»</p>
                            <a className="garanties-container__item-info__link" href="/">
                                <p id="link-text-2" className="garanties-container__item-info__link-text">Адрес студии</p>
                                <img src={red} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div id="gci-4" className="garanties-container__item">
                        <div className="garanties-container__item-img__block">
                            <img src={toast} alt=""/>
                        </div>
                        <div className="garanties-container__item-info">
                            <p className="garanties-container__item-info__title">Роскошная атмосфера</p>
                            <p className="garanties-container__item-info__description">Погрузитесь в красивое стильное пространство, где хочется находиться!</p>
                            <a className="garanties-container__item-info__link" href="/">
                                <p id="link-text-3" className="garanties-container__item-info__link-text">Смотреть фото</p>
                                <img src={blue} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Garanties;
