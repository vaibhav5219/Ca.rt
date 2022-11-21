import ListItem from "../ListItems/ListItem";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios"
import Loader from "../UI/Loader";

const Products = ({onAddItems, onRemoveItems, eventState}) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    //const [presentItems, setPresentItems] = useState([]);

    useEffect(() => {  // 1st parm is function, which executes 1st render and re-render

        async function fetchItems() {
            try {
                const response = await axios.get("https://react-cart-api-2022-2-default-rtdb.firebaseio.com/Items.json");    // to avoid call back hell 
                const data = response.data;
                const transformData = data.map((item, index) => {
                    return { 
                        ...item,
                        id: index
                    } 
                })     // if we don't use id , it will create id
                //setLoader(false);
                setItems(transformData);
            }
            catch (error) {
                console.log("Error  ", error);
                alert("Error occured");
            }
            finally{
                setLoader(false);
            }
        }

        fetchItems();
    }, []);

    useEffect(() => {
        if(eventState.id > -1){
            if(eventState.type === 1){
                handleAddItems(eventState.id)
            }
            else if(eventState.type === -1){
                handleRemoveItems(eventState.id)
            }
        }
    }, [eventState]);

    const handleAddItems = id =>{
        let data = [...items];
        let index = data.findIndex(i => i.id === id);
        data[index].quantity += 1;
        setItems([...data]);
        onAddItems(data[index]);
    }
    const handleRemoveItems = id =>{
        let data = [...items];
        let index = data.findIndex(i => i.id === id);
        
        if(data[index].quantity > 0){
            data[index].quantity -= 1;
            setItems([...data]);
            onRemoveItems(data[index]);
        }
    }

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
        <>
            <div className="d-flex flex-column"></div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    {
                        items.map(item => {
                            return (<ListItem onAdd={handleAddItems} onRemove={handleRemoveItems} data={item} key={item.id} updateItemTitle={updateItemTitle} />);
                        })
                    }
                </div>
            </div >
            <div className="d-flex flex-column"></div>
            {loader && <Loader/>}
        </>
    );
}

export default Products;