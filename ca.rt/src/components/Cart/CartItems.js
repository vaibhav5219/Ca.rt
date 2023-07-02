const CartItems = ({ data, OnEmitDecreaseItem, OnEmitIncreaseItem}) => {
    //console.log(data)
    return (
        <>
            <div className="col-4 flex">
                <div className="img-wrap">
                    <img className="img-fluid" src={`/assets/${data.imagePath}`} alt={data.title} ></img>
                </div>
                <div className="information">
                    <div>
                        <h4 className="">{data.title}</h4>
                        <div className="pricing">
                            <span>{data.discountedPrice}</span>
                            <small>
                                <strike>{data.price}</strike>
                            </small>
                        </div>
                    </div>
                    <div className="cart-addon cart-addon__modal">
                        <button onClick={OnEmitDecreaseItem}>-</button>
                        <span className="counter">{data.quantity}</span>
                        <button onClick={OnEmitIncreaseItem}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems