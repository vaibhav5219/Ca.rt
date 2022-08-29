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
    const[title, setTitle] = useState("");   //  title is a state variable and setTitle is function
    const[price, setPrice] = useState(0);
    const[discountPrice, setDiscountedPrice] = useState(0);
    const[thumbnail, setThumbnail] = useState("");
    
    const[item, setItems] = useState({
        id: 0,
        discountedPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "cart.png"
    });

    const submitForm = event =>{
        event.preventDefault();
        console.log({
            title:title,
            price,
            discountPrice,
            thumbnail
        });
        if(discountPrice > price){
            alert("Discounted price is not greater than actual price");
            return;
        }
        setItems({
            title,
            price,
            discountPrice,
            thumbnail
        });
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
        setItems({
            ...item,
            title: event.target.value
        });
    }
    const handlePrice = (event) => {
        setPrice(price =>{
            return (price, event.target.value);
        });
        setItems({
            ...price,
            title: event.target.value
        });
    }
    const handleDiscountedPrice = (event) => {
        setDiscountedPrice(event.target.value);
        setItems({
            ...discountPrice,
            title: event.target.value
        });
    }
    const handleThumbnail = event => {
        setThumbnail(event.target.value);
        setItems({
            ...thumbnail,
            title: event.target.value
        });
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
                        <input type="text" value={title} placeholder="Enter Title" onChange={handleTitle} required/>
                    </div>
                    <div className={"input-field row"}>
                        <label htmlFor={"price"}>Price</label>
                        <input type="number" value={price} placeholder="Enter Price" onChange={handlePrice} required/>
                    </div>
                    <div className={"input-field row"}>
                        <label htmlFor={"discountPrice"}>Discounted Price</label>
                        <input type="number" value={discountPrice} placeholder="Enter Discounted Price" onChange={handleDiscountedPrice} required/>
                    </div>
                    <div className={"input-field row"}>
                        <label htmlFor={"thumbnail"}>Thumbnail</label>
                        <input type="text" value={thumbnail} placeholder="Enter Thumbnail Name" onChange={handleThumbnail} required/>
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