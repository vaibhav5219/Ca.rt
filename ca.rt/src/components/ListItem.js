import AddToCartIcon from "../assets/icons/cart.png"

const ListItem = () =>{
    return (
        <div className={"item-card"}>
            <img src="/assets/cart.png" alt="some title" ></img>
            <div>
                <div>
                    <span>₹340</span>
                    <small>
                        <strike>₹450</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>Title of the List Item</h3>
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