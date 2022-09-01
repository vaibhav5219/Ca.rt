import ListItem from "../ListItems/ListItem";
import { useState } from "react";
import Form from "../Form/Form";

const Products = () => {
    const [item, setItems] = useState([
        {
            id: 0,
            discountedPrice: 340,
            price: 450,
            title: "Title of the item",
            thumbnail: "cart.png"
        },
        {
            id: 1,
            discountedPrice: 440,
            price: 456,
            title: "Title of the item",
            thumbnail: "cart.png"
        }
    ]);

    const submitForm = event => {
        event.preventDefault();

        if (item.discountedPrice > item.price) {
            alert("Discounted price is not greater than actual price");
            return;
        }
        // Communicate via child to parent =>    LIFTING THE STATE UP
        console.log("Item Updated! ", item);
    }
    const handleInput = event => {
        console.log(event.target.value, event.target.name);
        setItems({
            ...item,   // sperad operator
            [event.target.name]: event.target.value
        });
    }
    return (
        <div>
            <div className="d-flex flex-column"></div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    {/* <ListItem data={item}></ListItem> */}
                    {
                        item.map(it => {
                            console.log(it);
                            return (<ListItem data={it} key={it.id} />);
                        })
                    }
                    {/* {[<ListItem data={item[0]}/>, <ListItem data={item[1]}/>, <ListItem data={item[2]}/>, ]} */}
                </div>
            </div >
            <div className="d-flex flex-column"></div>
        </div>
    );
}

export default Products;