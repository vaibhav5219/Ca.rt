import Modal from "../UI/Modal";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/Cart.scss";
import CartItems from "../Cart/CartItems"
import OrderSuccessModal from "../UI/OrderSuccess";
import {useSelector,useDispatch} from "react-redux";

const Cart = ({ AddToCartIcon}) => {

    const [showModal, setShowModal] = useState(false);
    const [orderModal, setOrderModal] = useState(false);
    const items = useSelector(state => state.items)
    const totalAmount = useSelector(state => state.totalAmount)
    const dispatch = useDispatch()

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }
    const handleOrderModal = () =>{
        setShowModal(false);
        dispatch({
            type: "CLEAR_CART"
        })
        setOrderModal(previous => !previous);
    }

    const dispatchEvents = (type, item) => {
        console.log(item, type)
        if(type === 1){
            dispatch({
                type: "ADD_ITEM",
                paylod: {
                    item: item
                }
            })
        }
        if(type === -1){
            dispatch({
                type: "REMOVE_ITEM",
                paylod: {
                    id: item.id
                }
            })
        }
    }

    return (
        <>
            <button className="cartItem" onClick={handleModal}>
                <div className="">
                    <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
                    <i data-count={items.length} className="fas fa-shopping-cart  icon-grey badge"><strong>Cart</strong></i>
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
                                items.length > 0
                                    ?
                                    items.map(item => {
                                        return ( 
                                        <CartItems 
                                            data={item} 
                                            OnEmitIncreaseItem={item => dispatchEvents(1,item)} 
                                            OnEmitDecreaseItem={item => dispatchEvents(-1,item)} 
                                            key={item.id}
                                        /> )
                                    }) 
                                    :
                                    <div className="empty-cart"> Please Add Something in your cart</div>
                            }

                        </div>
                        {
                            items.length > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount</h4>
                                    <div>
                                        {totalAmount}
                                        {/* {
                                            items.reduce((previous, current) => {
                                                return previous + ( current.discountedPrice * current.quantity )
                                            }, 0)
                                        } */}
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