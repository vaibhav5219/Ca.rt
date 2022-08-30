import ListItem from "../ListItems/ListItem";
import { useState } from "react";
import Form from "../Form/Form";

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
        // Communicate via child to parent =>    LIFTING THE STATE UP
        console.log("Item Updated! ", item);
    }
    const handleInput = event =>{
        console.log(event.target.value, event.target.name);
        setItems({
            ...item,   // sperad operator
            [event.target.name]: event.target.value
        });
    }
    return (
        <div>
            <div className="d-flex flex-column"></div>
            <div className={"form"}>
            <div className={"form1"}>
                <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>     
            </div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    <ListItem data={item}></ListItem>
                </div>
            </div >
            </div>
            <div className="d-flex flex-column"></div>
        </div>
    );
}

export default Products;