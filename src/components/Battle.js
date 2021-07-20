import arrow from "../assets/img/slider/arrow.svg";
import white_logo from '../assets/img/battle/white_logo.svg'
import like from '../assets/img/battle/like.svg'

function Battle() {
    return (
        <div className="battle">
            <div className="content">
                <h2 className="module-title">Кто выигрывает в дуэли?</h2>
                <h3 className="module-subtitle">Выбираем лучший маникюр месяца!</h3>
                <div className="battle-slider-container">
                    <button className="slider-button slider-button-prev">
                        <div className="slider-button__ring"></div>
                        <img src={arrow} alt=""/>
                    </button>
                    <button className="slider-button slider-button-next">
                        <div className="slider-button__ring"></div>
                        <img src={arrow} alt=""/>
                    </button>
                    <div className="battle-slider-container__block">
                            <div id="bb-1" className="battle-slider-container__block-background">
                                <div className="battle-slider-container__block-background-img">
                                    <img className="like" src={like} alt=""/>
                                </div>
                                <div id="ba-1" className="battle-slider-container__block-background-account">
                                    <img src={white_logo} alt=""/>
                                    <div className="battle-slider-container__block-background-account__info">
                                        <p>@amalfibeauty</p>
                                        <p>Дизайн «Натуральные текстуры» выполн…</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vs-block">
                                <p>V</p>
                                <p>S</p>
                            </div>
                            <div id="bb-2" className="battle-slider-container__block-background">
                                <div className="battle-slider-container__block-background-img">
                                    <img className="like" src={like} alt=""/>
                                </div>
                                <div id="ba-2" className="battle-slider-container__block-background-account">
                                    <img src={white_logo} alt=""/>
                                    <div className="battle-slider-container__block-background-account__info">
                                        <p>@amalfibeauty</p>
                                        <p>Дизайн «Натуральные текстуры» выполн…</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Battle;
