import logo from '../assets/img/logo.svg'
import time from '../assets/img/time.svg'
import place from '../assets/img/place.svg'
function NavHead() {
    return (
        <div className="header">
            <div className="content">
                <img src={logo} alt=""/>
                <div className="header-content__nav">
                    <div className="header-content__nav-contacts">
                        <div className="header-content__nav-contacts__item">
                            <img src={time} alt=""/>
                            <p className="header-content__nav-contacts__item-light-text">Ежедневно с 10 до 22</p>
                        </div>
                        <div className="header-content__nav-contacts__item">
                            <img src={place} alt=""/>
                            <p className="header-content__nav-contacts__item-medium-text">Белорусская, Александра Невского, 19–25</p>
                        </div>
                        <div className="header-content__nav-contacts__item">
                            <a className="header-content__nav-contacts__item-phone" href="tel:84951320003">+7 (495) 132-00-03</a>
                        </div>
                        <div className="header-content__nav-contacts__item">
                            <a className="header-content__nav-contacts__item-order" href="/">Записаться онлайн</a>
                        </div>
                    </div>
                    <div className="header-content__nav-navigation">
                        <a href="/" className="header-content__nav-navigation-link">Услуги</a>
                        <a href="/" className="header-content__nav-navigation-link">Дизайны</a>
                        <a href="/" className="header-content__nav-navigation-link">Прайс</a>
                        <a href="/" className="header-content__nav-navigation-link">О студии</a>
                        <a href="/" className="header-content__nav-navigation-link">Отзывы</a>
                        <a href="/" className="header-content__nav-navigation-link">Статьи</a>
                        <a href="/" className="header-content__nav-navigation-link">Акции</a>
                        <a href="/" className="header-content__nav-navigation-link">Контакты</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavHead;
