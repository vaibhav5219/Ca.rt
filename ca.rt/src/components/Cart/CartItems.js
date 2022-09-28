const CartItems = ({ data, OnEmitDecreaseItem, OnEmitIncreaseItem}) => {
    return (
        <>
            <div className="checkout-modal_list-item">
                <div className="img-wrap">
                    <img className="img-fluid" src={`/assets/${data.thumbnail}`} alt={data.title} ></img>
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
                        <button onclick={() => OnEmitDecreaseItem(data.id) }>-</button>
                        <span className="counter">{data.quantity}</span>
                        <button onclick={() => OnEmitIncreaseItem(data.id) }>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems