import Modal from "./Modal"
import orderSuccessImg from "../../assets/icons/cart.png"

const OrderSuccessModal = ({onClose, orderId}) =>{
    return (
        <Modal onClose={onClose}> 
            <div className="order-container">
                <div className="order-container--success">
                    <img src={orderSuccessImg} alt="Success" className="img-fluid" style={{height:200}}></img>
                    <div className="message">
                        <h1>Order SuccessFully Placed!</h1>
                        <span>OrderId #{orderId}</span>
                        {/* <span>OrderId #{Math.random().toString(32).slice(2)}</span> */}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal