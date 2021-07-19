const price = [
    {'title':'Маникюр + гель-лак', 'price':'1 090 ₽'},
    {'title':'Педикюр + гель-лак', 'price':'1 790 ₽'},
    {'title':'Дизайн ноготков', 'price':'50 ₽'},
    {'title':'Наращивание ноготков', 'price':'2 500 ₽'},
    {'title':'Окрашивание бровей', 'price':'500 ₽'},
    {'title':'Ламинирование бровей', 'price':'1 800 ₽'},
    {'title':'Наращивание ресничек', 'price':'2 400 ₽'},
    {'title':'Макияж + причёска', 'price':'1 090 ₽'},
    ]

function Price() {
    return (
        <div className="price">
            <div className="content">
                <div className="price-top">
                    <h2 className="module-title">Цены на основные услуги</h2>
                    <button id="price-btn" className="button">
                        <p>Открыть полный прайс лист</p>
                        <div className="text-background"></div>
                        <div className="white-ring"></div>
                    </button>
                </div>
                <div className="price-table">
                    <div className="price-table__column">
                        <div className="price-table__column-row">
                            <p>{price[0].title}</p>
                            <p>{price[0].price}</p>
                        </div>
                        <div className="price-table__column-row">
                            <p>{price[1].title}</p>
                            <p>{price[1].price}</p>
                        </div>
                        <div className="price-table__column-row">
                            <p>{price[2].title}</p>
                            <p>{price[2].price}</p>
                        </div>
                        <div className="price-table__column-row">
                            <p>{price[3].title}</p>
                            <p>{price[3].price}</p>
                        </div>
                    </div>
                    <div className="price-table__column">
                        <div className="price-table__column-row">
                            <p>{price[4].title}</p>
                            <p>{price[4].price}</p>
                        </div>
                        <div className="price-table__column-row">
                            <p>{price[5].title}</p>
                            <p>{price[5].price}</p>
                        </div>
                        <div className="price-table__column-row">
                            <p>{price[6].title}</p>
                            <p>{price[6].price}</p>
                        </div>
                        <div className="price-table__column-row">
                            <p>{price[7].title}</p>
                            <p>{price[7].price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;
