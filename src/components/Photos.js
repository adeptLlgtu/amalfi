import arrow from "../assets/img/slider/arrow.svg";
import ph_1 from '../assets/img/photos/ph_1.png'
import ph_2 from '../assets/img/photos/ph_2.png'
import ph_3 from '../assets/img/photos/ph_3.png'
import ph_4 from '../assets/img/photos/ph_4.png'
import ph_5 from '../assets/img/photos/ph_5.png'
import ph_6 from '../assets/img/photos/ph_6.png'
import ph_7 from '../assets/img/photos/ph_7.png'
import ph_8 from '../assets/img/photos/ph_8.png'
import ph_9 from '../assets/img/photos/ph_9.png'
import ph_10 from '../assets/img/photos/ph_10.png'
import ph_11 from '../assets/img/photos/ph_11.png'
import ph_12 from '../assets/img/photos/ph_12.png'



function Photos() {
    return (
        <div className="photo">
            <div className="content">
                <h2 className="module-title">Фотографии салона</h2>
                <h3 className="module-subtitle">Неповторимая атмосфера, стильный роскошный дизайн и услуги высочайшего качества в салоне красоты Amalfi Nail&Beauty!</h3>
                <div className="photo-slider">
                    <button className="slider-button slider-button-prev">
                        <div className="slider-button__ring"></div>
                        <img src={arrow} alt=""/>
                    </button>
                    <button className="slider-button slider-button-next">
                        <div className="slider-button__ring"></div>
                        <img src={arrow} alt=""/>
                    </button>
                    <img src={ph_1} alt=""/>
                </div>
            </div>
            <div className="photo-line">
                <img src={ph_2} alt=""/>
                <img src={ph_3} alt=""/>
                <img src={ph_4} alt=""/>
                <img src={ph_5} alt=""/>
                <img src={ph_6} alt=""/>
                <img src={ph_7} alt=""/>
                <img src={ph_8} alt=""/>
                <img src={ph_9} alt=""/>
                <img src={ph_10} alt=""/>
                <img src={ph_11} alt=""/>
                <img src={ph_12} alt=""/>
            </div>
        </div>
    );
}

export default Photos;
