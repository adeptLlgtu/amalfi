import arrow from '../assets/img/slider/arrow.svg'
import individual from '../assets/img/slider/individual.png'
import desinfection from '../assets/img/slider/desinfection.png'
import sterilisation from '../assets/img/slider/sterilization.png'

function Care() {
    return (
        <div className="care">
            <div className="content">
                <h2 className="module-title">Принимаем меры для заботы о клиентах и сотрудниках</h2>
                <div className="care-slider">
                    <button className="slider-button slider-button-prev">
                        <div className="slider-button__ring"></div>
                        <img src={arrow} alt=""/>
                    </button>
                    <button className="slider-button slider-button-next">
                        <div className="slider-button__ring"></div>
                        <img src={arrow} alt=""/>
                    </button>
                    <div id="csi-1" className="care-slider__item">
                        <p className="care-slider__item-number">1</p>
                        <img src={individual} alt=""/>
                        <p className="care-slider__item-title">Индивидуальные наборы</p>
                        <p className="care-slider__item-description">Для каждого клиента мы используем одноразовые индивидуальные наборы инструментов для педикюра и маникюра: пилка, бафик, палочки, тёрка для педикюра и сопутствующие одноразовые материалы.</p>
                    </div>
                    <div id="csi-2" className="care-slider__item">
                        <p className="care-slider__item-number">2</p>
                        <img src={desinfection} alt=""/>
                        <p className="care-slider__item-title">Дезинфекция</p>
                        <p className="care-slider__item-description">Все наши инструменты проходят постоянную дезинфекцию после каждой услуги. Мастер на полчаса помещает их в специальный дезинфецирующий раствор, который мы меняем каждые 3 часа.</p>
                    </div>
                    <div id="csi-3" className="care-slider__item">
                        <p className="care-slider__item-number">3</p>
                        <img src={sterilisation} alt=""/>
                        <p className="care-slider__item-title">Перед стерилизацией</p>
                        <p className="care-slider__item-description">После каждой процедуры дезинфекции мы дополнительно очищаем инструменты от раствора и возможных остатков биотканей. Мастер промывает их водой и кладёт их в специальный бокс, на котором указывается время обработки.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Care;
