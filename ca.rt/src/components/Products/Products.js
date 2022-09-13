import ListItem from "../ListItems/ListItem";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios"

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {  // 1st parm is function, which executes 1st render and re-render

        async function fetchItems() {
            try {
                const response = await axios.get("https://react-cart-api-2022-default-rtdb.firebaseio.com/Items.json");    // to avoid call back hell 
                const data = response.data;
                const transformData = data.map((item, index) => { return { ...item, id: index } })     // if we don't use id , it will create id
                setItems(transformData);
            }
            catch (error) {
                console.log("Error  ", error);
                alert("Error occured");
            }
        }

        fetchItems();
    }, []);

    const updateItemTitle = async (itemId) => {
        try {
            let title = `updated the title item #Id - ${itemId}`
            //console.log(`item with id: ${itemId}`);
            await axios.patch(`https://react-cart-api-2022-default-rtdb.firebaseio.com/Items/${itemId}.json`, {
                title: title
            })
            let data = [...items]
            let index = data.findIndex( e => e.id === itemId);
            data[itemId]['title'] = title;

            setItems(data);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="d-flex flex-column"></div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    {
                        items.map(item => {
                            return (<ListItem data={item} key={item.id} updateItemTitle={updateItemTitle} />);
                        })
                    }
                </div>
            </div >
            <div className="d-flex flex-column"></div>
        </div>
    );
}

export default Products;