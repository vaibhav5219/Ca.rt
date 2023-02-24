import ListItem from "../ListItems/ListItem";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios"
import Loader from "../UI/Loader";
import { additemhandler, removeitemhandler } from "../../actions";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SearchBox from "../UI/Search";


const Products = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    //const [presentItems, setPresentItems] = useState([]);
    const params = useParams()
    const history = useNavigate();
    const {search} = useLocation();
    console.log("history => ",history)
    const queryParams = new URLSearchParams(search).get("search");

    const handleNotFound = () => {
        history("/404");
    }

    useEffect(() => {  // 1st parm is function, which executes 1st render and re-render

        async function fetchItems() {
            try {
                let slug = 'Items.json';
                if(params.category){
                    slug = `${params.category}.json`
                }
                if(queryParams){
                    slug += `?search=${queryParams}`
                }
                console.log("slug =>",slug)
                const response = await axios.get(`https://react-cart-api-2023-default-rtdb.firebaseio.com/${slug}`);    // to avoid call back hell 
                const data = response.data;
                //console.log(slug)

                if(!data){
                    handleNotFound();
                    return;
                }

                const transformData = data.map((item, index) => {
                    return { 
                        ...item,
                        id: index
                    }
                })     // if we don't use id , it will create id
                //setLoader(false);
                //console.log(transformData);
                setItems(transformData);
            }
            catch (error) {
                console.log("Error  ", error);
                //alert("Error occured");
            }
            finally{
                setLoader(false);
            }
        }

        fetchItems();

        return () =>{
            setItems([]);
            setLoader(true)
        }
    }, [params.category, queryParams]);

    const updateItemTitle = async (itemId) => {
        try {
            let title = `updated the title item #Id - ${itemId}`
            console.log(`item with id: ${itemId}`);
            await axios.patch(`https://react-cart-api-2023-default-rtdb.firebaseio.com/${itemId}.json`, {
                title: title
            })
            let data = [...items]
            let index = data.findIndex( e => e.id === itemId);
            data[itemId]['title'] = title;

            setItems(data);
        }
        catch(error)
        {
            console.log("Error => ",error);
        }
    }

    return (
        <>
            <div className="container d-flex flex-column"></div>
            <div className={"container d-flex flex-column"}>
                <div className={"row d-flex"}>
                    {
                        items.map(item => {
                            return (<ListItem onAdd={additemhandler} onRemove={removeitemhandler} data={item} key={item.id} updateItemTitle={updateItemTitle} />);
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