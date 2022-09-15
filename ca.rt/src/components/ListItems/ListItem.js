//import AddToCartIcon from "../assets/icons/cart.png"
import AddToCartIcon from "../../assets/icons/cart.png"
import { Fragment, useState } from "react"
import Modal from "../UI/Modal";

const ListItem = ({ data, updateItemTitle }) => {
    //let[message,setMessage] = useState("Not added to cart yet");
    //let message = "Not added to cart yet"
    const [counter, setCounter] = useState(0);

    //const increaseCounterByOne = ()=> { setCounter: counter+1  };
    const increaseCounterByOne = () => {
        setCounter(counter => {
            return (counter, counter + 1)
        });
    };
    const [showModal,setShowModal] = useState(false);
    const handleModal = () =>{
        setShowModal(previousState => !previousState)
    }

    return (
        <Fragment>
            <div className={"item-card"} onClick={handleModal}>
                <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="some title" ></img> {/*  src={"/assets/"+data.thumbnail} */}
                <div>
                    <div>
                        <span>₹{data.discountedPrice}</span>
                        <small>
                            <strike>₹{data.price}</strike>
                        </small>
                    </div>
                    <div className={"title"}>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                {/* <button onClick={()=>updateItemTitle(data.id)} >Update the title</button> */}
                {
                    counter < 1 ?
                        <button className={"cart-add "} onClick={increaseCounterByOne} >
                            <span className={"cart-add "}>Add to cart</span>
                            <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
                        </button>
                        :
                        <div className={"cart-addon cart-add"}  >
                            <button onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}><span>-</span></button>
                            <span className={"counter"}>{counter} </span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                }
            </div>
            {showModal && <Modal onClose={handleModal}/>}
        </Fragment>
    );
}


export default ListItem;