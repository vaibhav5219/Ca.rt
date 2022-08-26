import AddToCartIcon from "../assets/icons/cart.png"

const ListItem = () =>{
    const data = {
        discountedPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "cart.png"
    }
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
            <button className={"cart-add"}>
                <span>Add to cart</span>
                <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
            </button>
        </div>
    );
}


export default ListItem;