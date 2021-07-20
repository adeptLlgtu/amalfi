import phone from "../assets/img/reviews/phone.svg";


function Gifts() {
    return (
        <div className="gifts">
            <div className="content">
                <h2 className="module-title">Приятные предложения</h2>
                <div id="gr-1" className="gifts-row">
                    <div className="gifts-row__item" id="gri-1">
                        <div className="gifts-row__item-inside"></div>
                            <div className="gifts-row__item-inside">
                            <h3>15% скидка на первый визит</h3>
                            <p className="gifts-row__item-inside__description">Если ты ещё ни разу у нас не была, приглашаем попробовать со скидкой. Первый маникюр + гель-лак = 925 рублей.</p>
                            <button className="button">
                                <p>Записаться</p>
                                <div className="text-background"></div>
                                <div className="white-ring"></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="gr-2" className="gifts-row">
                    <div className="gifts-row__item" id="gri-2">
                        <p>Скидка 10% за фото маникюра</p>
                    </div>
                    <div className="gifts-row__item" id="gri-3">
                        <p>Маникюр с подругой — дешевле</p>
                    </div>
                </div>
                <div id="gr-3" className="gifts-row">
                    <div className="gifts-row__item" id="gri-4">
                        <p>Абонементы со скидкой до 30%</p>
                    </div>
                    <div className="gifts-row__item" id="gri-5">
                        <p>Подарок на День рождения</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gifts;
