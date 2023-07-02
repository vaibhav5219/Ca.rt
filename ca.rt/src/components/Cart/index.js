import Modal from "../UI/Modal";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/Cart.scss";
import CartItems from "../Cart/CartItems"
import OrderSuccessModal from "../UI/OrderSuccess";
import {useSelector,useDispatch, connect} from "react-redux";
import { additemhandler, removeitemhandler, clearCartHandler, placeOrderhandler } from "../../actions";
import AddToCartIcon from "../../../src/assets/icons/cart.png";

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
    const [orderId, setOrderId] = useState("")
    const dispatch = useDispatch()

    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }
    const handleOrderModal = () =>{
        setShowModal(false);
        console.log("Here!")
        //dispatch(clearCartHandler())
        //clearCartHandler()
        setOrderModal(previous => !previous);
    }
    
    const orderHandler = (type, item) => {
        setShowModal(false)
        //dispatch(clearCartHandler())
        dispatch(placeOrderhandler(response => {
            console.log("response in placeOrderhandler =>", response)
            if(response.error)
            {
                alert(response.data.error || "Some error occured, please try again")
            }
            else{
                console.log(response)
                setOrderId(response.data.name)
                setOrderModal(previous => !previous)
                setShowModal(prev => !prev)
            }
        }))
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
            <button className="cartItem btn btn-info" onClick={handleModal}>
                {/* <span data-items={items.length}>Cart</span> */}
                <div className="btn btn-outline-danger">
                    <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
                    <i data-count={items.length} className="fas fa-shopping-cart  icon-grey badge" style={{position:'inherit'}}><strong>Cart</strong></i>
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
                                <button onClick={orderHandler}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
            {
                orderModal && <OrderSuccessModal orderId={orderId} onClose={handleOrderModal}></OrderSuccessModal>
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