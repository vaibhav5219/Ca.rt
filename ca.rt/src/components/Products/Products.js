import ListItem from "../ListItems/ListItem";
import { useEffect, useState } from "react";

const Products = () => {
    const [items, setItems] = useState([
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
    useEffect(()=>{  // 1st parm is function, which executes 1st render and re-render
        const res = fetch('https://react-cart-api-2022-default-rtdb.firebaseio.com/Items.json')
        .then(response => response.json())
        .then(data => {                         // To avoid call back hell, so use chaining
            console.log(data)
        })
        .catch(error =>{      // Error handling
            console.log(error);
        })
    },[]);

    return (
        <div>
            <div className="d-flex flex-column"></div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    {
                        items.map(item => {
                            return (<ListItem data={item} key={item.id} />);
                        })
                    }
                </div>
            </div >
            <div className="d-flex flex-column"></div>
        </div>
    );
}

export default Products;