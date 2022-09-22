import Modal from "../UI/Modal";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/Cart.scss";

const Cart = ({ count, AddToCartIcon }) => {

    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }

    return (
        <>
            <button className="cartItem" onClick={handleModal}>
                <div className="text-white">
                    <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
                    <i data-count={count} className="fas fa-shopping-cart  icon-grey badge"><strong>Cart</strong></i>
                </div>
            </button>
            {
                showModal
                &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Model</h2>
                        <div className="checkout-modal_list">
                            {
                                count > 0
                                    ?
                                    <div className="checkout-modal_list-item">
                                        <div className="img-wrap">
                                            <img className="img-fluid" src={`/assets/placeholder.png`} ></img>
                                        </div>
                                        <div className="information">
                                            <div>
                                                <h4 className="">Title Of The Price</h4>
                                                <div className="pricing">
                                                    <span>2000</span>
                                                    <small>
                                                        <strike>3000</strike>
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="cart-addon cart-addon__modal">
                                                <button>-</button>
                                                <span className="counter">{0}</span>
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="empty-cart"> Please Add Something in your cart</div>
                            }

                        </div>
                        {
                            count > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount</h4>
                                    <div>2000 INR</div>
                                </div>
                                <button>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
        </>
    );
}

export default Cart;