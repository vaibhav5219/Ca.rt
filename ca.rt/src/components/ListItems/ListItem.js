//import AddToCartIcon from "../assets/icons/cart.png"
import AddToCartIcon from "../../assets/icons/cart.png"
import {useState} from "react"

const ListItem = ({data}) =>{
    //let[message,setMessage] = useState("Not added to cart yet");
    //let message = "Not added to cart yet"
    const [counter, setCounter] = useState(0);

    //const increaseCounterByOne = ()=> { setCounter: counter+1  };
    //const decreaseCounterByOne = ()=> { this.setCounter= this.state.counter-1; };
    

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`}  alt="some title" ></img> {/*  src={"/assets/"+data.thumbnail} */}
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
            {/* <small className={"class-message"}>{message}</small>
            <button className={"cart-add "} onClick={handelClick} >
                <span className={"cart-add "}>Add to cart</span>
                <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
            </button> */}
            <div className={"cart-addon cart-add"}  >
                <button onClick={() => setCounter( counter>0 ? counter - 1 :counter)}><span>-</span></button>
                <span className={"counter"}>{counter} </span>
                <button onClick={() => setCounter(counter + 1)}><span>+</span></button>
            </div>
        </div>
    ); 
}


export default ListItem;