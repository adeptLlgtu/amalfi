import tr from '../assets/img/happy/tr.svg'
import happy_1 from '../assets/img/happy/honey_1.svg'
import happy_2 from '../assets/img/happy/honey_2.svg'

function Happy() {
    return (
        <div className="happy">
            <div className="content">
                <div className="happy-top">
                    <div className="happy-top__img-block">
                        <div className="happy-top__img-block-img">
                            <div className="ring">
                                <img src={tr} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="happy-top__text-block">
                        <h3 className="happy-top__text-block">Порадуйте друзей и близких</h3>
                        <p>Уход за собой — лучший подарок!</p>
                        <p>При покупке подарочного сертификаты вы получите целый бьюти набор с маской для лица или кремом для рук в красивой упаковке!</p>
                    </div>
                </div>
                <div className="happy-math">
                    <p className="happy-math__text">Ваш подарок</p>
                    <p className="happy-math__text">=</p>
                    <div className="happy-math__item">
                        <img src={happy_1} alt=""/>
                        <p id="hmi-1">Подарочный сертификат Amalfi на любые услуги</p>
                    </div>
                    <p className="happy-math__text">+</p>
                    <div className="happy-math__item">
                        <img src={happy_2} alt=""/>
                        <p id="hmi-2">Маска для лица или крема для рук</p>
                    </div>
                </div>
                <div className="happy-buy">
                    <h3>Дарите с удовольствием!</h3>
                    <button className="button">
                        <p>Приобрести сертификат онлайн</p>
                        <div className="text-background"></div>
                        <div className="white-ring"></div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Happy;
