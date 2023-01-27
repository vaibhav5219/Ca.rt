import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
    return (
        <Fragment>
            <h1>Products Component</h1>
            {/* <a href="/product/1">Product Item 1</a><br></br> */}
            {/* <a href="/product">Product Item 2</a> */}
            <Link to={"/product/1"}>Product Item 1 via Link</Link><br></br>
            <Link to={"/products"}>Product  Item 2 via Link </Link><br></br>
            <Link to={"/products"} activeClassName="active">Product  Item 3 via NavLink </Link>
            
        </Fragment>
    )
}


// import ListItem from "../ListItems/ListItem";
// import { useEffect, useState } from "react";
// import axios, { Axios } from "axios"
// import Loader from "../UI/Loader";
// import { additemhandler, removeitemhandler } from "../../actions";


// const Products = () => {
//     const [items, setItems] = useState([]);
//     const [loader, setLoader] = useState(true);
//     //const [presentItems, setPresentItems] = useState([]);

//     useEffect(() => {  // 1st parm is function, which executes 1st render and re-render

//         async function fetchItems() {
//             try {
//                 const response = await axios.get("https://react-cart-api-2022-3-default-rtdb.firebaseio.com/Items.json");    // to avoid call back hell 
//                 const data = response.data;
//                 const transformData = data.map((item, index) => {
//                     return { 
//                         ...item,
//                         id: index
//                     } 
//                 })     // if we don't use id , it will create id
//                 //setLoader(false);
//                 setItems(transformData);
//             }
//             catch (error) {
//                 console.log("Error  ", error);
//                 alert("Error occured");
//             }
//             finally{
//                 setLoader(false);
//             }
//         }

//         fetchItems();
//     }, []);

//     const updateItemTitle = async (itemId) => {
//         try {
//             let title = `updated the title item #Id - ${itemId}`
//             //console.log(`item with id: ${itemId}`);
//             await axios.patch(`https://react-cart-api-2022-3-default-rtdb.firebaseio.com/Items/${itemId}.json`, {
//                 title: title
//             })
//             let data = [...items]
//             let index = data.findIndex( e => e.id === itemId);
//             data[itemId]['title'] = title;

//             setItems(data);
//         }
//         catch(error)
//         {
//             console.log(error);
//         }
//     }

//     return (
//         <>
//             <div className="d-flex flex-column"></div>
//             <div className={"product-list d-flex flex-column "}>
//                 <div className={"product-list-wrapper  d-flex justify-content-center"}>
//                     {
//                         items.map(item => {
//                             return (<ListItem onAdd={additemhandler} onRemove={removeitemhandler} data={item} key={item.id} updateItemTitle={updateItemTitle} />);
//                         })
//                     }
//                 </div>
//             </div >
//             <div className="d-flex flex-column"></div>
//             {loader && <Loader/>}
//         </>
//     );
// }

 export default Products;