import a from '../assets/img/banner/a.svg'
import malfi from '../assets/img/banner/malfi.svg'
import girl from '../assets/img/banner/girl.png'
import blur_a from '../assets/img/banner/blur_a.svg'

function TopBanner() {
    return (
        <div className="top-banner">
            <img className="top-banner__word" src={a} alt=""/>
            <div className="top-banner-pink__block">
                <img src={malfi} alt=""/>
                <img src={girl} alt=""/>
                <img src={blur_a} alt=""/>
            </div>
            <div className="content">
                <h2>Роскошный образ</h2>
                <p>в салоне красоты Amalfi Nail&Beauty!</p>
                <button>
                    <p>Записаться</p>
                    <div className="text-background"></div>
                    <div className="white-ring"></div>
                </button>
            </div>
        </div>
    );
}

export default TopBanner;
