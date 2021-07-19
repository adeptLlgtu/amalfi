import video from '../assets/img/salon/video.png'
import magic from '../assets/img/salon/magic.png'

function SalonVideo() {
    return (
        <div className="salon">
            <div className="content">
                <div className="salon-top">
                    <h2 className="module-title">Салон и услуги в одном чудесном видео</h2>
                    <div className="salon-img__background"></div>
                </div>
                <img className="video-img" src={video} alt=""/>
                <img className="magic" src={magic} alt=""/>
                <p className="salon-microdescription">Просто посмотрите небольшое видео о салоне, работах и мастерах</p>
            </div>
        </div>
    );
}

export default SalonVideo;
