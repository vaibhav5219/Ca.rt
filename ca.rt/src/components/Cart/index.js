import Modal from "../UI/Modal";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/Cart.scss";
import CartItems from "../Cart/CartItems"
import OrderSuccessModal from "../UI/OrderSuccess";
import {useSelector,useDispatch, connect} from "react-redux";
import { additemhandler, removeitemhandler, clearCartHandler } from "../../actions";

 const Cart = (
//    {
//     items, 
//     totalAmount, 
//     additemhandler, 
//     removeitemhandler, 
//     clearCartHandler
// }
) => {

    const [showModal, setShowModal] = useState(false);
    const [orderModal, setOrderModal] = useState(false);
    const items = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch()

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }
    const handleOrderModal = () =>{
        setShowModal(false);
        console.log("Here!")
        //dispatch(clearCartHandler())
        clearCartHandler()
        setOrderModal(previous => !previous);
    }

    const dispatchEvents = (type, item) => {
        //console.log(item, type)
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
                <span data-items={items.length}>Cart</span>
                <div className="">
                    <img src={""} alt="Cart Icon" width={"20"} height={"20"}></img>
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
                                            OnEmitIncreaseItem={()=> additemhandler(item)} 
                                            OnEmitDecreaseItem={() => removeitemhandler(item.id)} 
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

const mapStateToProps = (state) => {
    return {
        items: state.items,
        totalAmount: state.totalAmount
    }
}
const mapDispatchToProps = {
    additemhandler,
    removeitemhandler,
    clearCartHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);