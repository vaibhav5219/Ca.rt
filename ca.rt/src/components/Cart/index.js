import Modal from "../UI/Modal";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/Cart.scss";
import CartItems from "../Cart/CartItems"
import OrderSuccessModal from "../UI/OrderSuccess";

const Cart = ({ count, AddToCartIcon , items, onHandleEvent}) => {

    const [showModal, setShowModal] = useState(false);
    const [orderModal, setOrderModal] = useState(false);

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }
    const handleOrderModal = () =>{
        setShowModal(false);
        setOrderModal(previous => !previous);
    }

    return (
        <>
            <button className="cartItem" onClick={handleModal}>
                <div className="">
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
                                    items.map(item => {
                                        return ( 
                                        <CartItems 
                                            data={item} 
                                            OnEmitIncreaseItem={id => onHandleEvent(id,1)} 
                                            OnEmitDecreaseItem={id => onHandleEvent(id,-1)} 
                                            key={item.id}
                                        /> )
                                    }) 
                                    :
                                    <div className="empty-cart"> Please Add Something in your cart</div>
                            }

                        </div>
                        {
                            count > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount</h4>
                                    <div>
                                        {
                                            items.reduce((previous, current) => {
                                                return previous + ( current.discountedPrice * current.quantity )
                                            }, 0)
                                        }
                                        <span style={{'margin':'5px'}}> INR </span>
                                    </div>
                                </div>
                                <button onClick={handleOrderModal}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
            {
                orderModal && <OrderSuccessModal onClose={handleOrderModal}></OrderSuccessModal>
            }
        </>
    );
}

export default Cart;