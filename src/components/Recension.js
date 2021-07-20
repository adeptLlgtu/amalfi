import phone from '../assets/img/reviews/phone.svg'

function Recension() {
    return (
        <div className="recension">
            <div className="content">
                <h2 className="module-title">Честные отзывы</h2>
                <p className="recension-description">80% клиентов рекомендуют наш салон друзьям и близким. За время нашей работы мы получили сотни положительных отзывов.</p>
                <button className="button">
                    <p>Посмотреть ещё отзывы</p>
                    <div className="text-background"></div>
                    <div className="white-ring"></div>
                </button>
                <div className="phone">
                    <img src={phone} alt=""/>
                    <iframe width="88%" height="94%" src="https://www.youtube.com/embed/riyEXG3vRBo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default Recension;
