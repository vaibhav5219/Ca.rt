import ListItem from "../ListItems/ListItem";
import { useState } from "react";

// const items = [
//     {
//         id: 0,
//         discountedPrice: 340,
//         price: 450,
//         title: "Title of the item",
//         thumbnail: "cart.png"
//     },
//     {
//         id: 1,
//         discountedPrice: 340,
//         price: 450,
//         title: "Title of the item",
//         thumbnail: "cart.png"
//     }
// ]

const Products = () => {
    const[item, setItems] = useState({
        id: 0,
        discountedPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "cart.png"
    });

    const submitForm = event =>{
        event.preventDefault();
        
        if(item.discountedPrice > item.price){
            alert("Discounted price is not greater than actual price");
            return;
        }
        
    }

    const handleTitle = (event) => {
        setItems({
            ...item,
            title: event.target.value
        });
    }
    const handlePrice = (event) => {
        setItems({
            ...item,
            price: event.target.value
        });
    }
    const handleDiscountedPrice = (event) => {
        setItems({
            ...item,
            discountedPrice: event.target.value
        });
    }
    const handleThumbnail = event => {
        setItems({
            ...item,
            thumbnail: event.target.value
        });
    }

    const handleInput = event =>{
        console.log(event.target.value);
    }
    return (
        <div>
            <div className="d-flex flex-column"></div>
            <div className={"form"}>
            <div className={"form1"}>
                <form onSubmit={submitForm}>
                    <h2>Item card Details</h2>
                    <div className={"input-field row"}>
                        <label htmlFor={"title"}>Title</label>
                        <input type="text" name="title" value={item.title} placeholder="Enter Title" onChange={handleInput} required/>
                    </div>
                    <div className={"input-field row"}>
                        <label htmlFor={"price"}>Price</label>
                        <input type="number" name="price" value={item.price} placeholder="Enter Price" onChange={handleInput} required/>
                    </div>
                    <div className={"input-field row"}>
                        <label htmlFor={"discountPrice"}>Discounted Price</label>
                        <input type="number" name="discountedPrice" value={item.discountedPrice} placeholder="Enter Discounted Price" onChange={handleInput} required/>
                    </div>
                    <div className={"input-field row"}>
                        <label htmlFor={"thumbnail"}>Thumbnail</label>
                        <input type="text" name="thumbnail" value={item.thumbnail} placeholder="Enter Thumbnail Name" onChange={handleInput} required/>
                    </div>
                    <div className={"input-field "}>
                        <button className="btn btn-info">Update</button>
                    </div>
                </form>
            </div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    <ListItem data={item}></ListItem>
                    {/* <ListItem data={items[1]}></ListItem>
                    <ListItem data={items[0]}></ListItem>
                    <ListItem data={items[1]}></ListItem> */}
                    
                </div>
            </div >
            </div>
            <div className="d-flex flex-column"></div>
        </div>
    );
}

export default Products;