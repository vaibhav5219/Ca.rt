
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Dropdown from 'react-dropdown';      // npm install react-dropdown  --save
import Dropdown from 'react-bootstrap/Dropdown';
//import DropDown from "cdbreact/dist/components/DropDown";
import AddToCartIcon from "../../../src/assets/icons/cart.png";
import DropdownButton from 'react-bootstrap/DropdownButton';

const ShopProduct = (event) => {
    const history = useNavigate()
    const [Categories, SetCategories] = useState([]);
    const [props, setprops] = useState({})

    //     try {
    //         const response = axios.get("")
    //             .then(
    //                 (response) => {
    //                     var result = response.data;
    //                     console.log('result ->> ', result);            
    //                     console.log('categories1 ->> ', Categories);
    //                 },
    //                 (error) => {
    //                     console.log(error);
    //                 });


    useEffect(() => {
        const response = async () => {
            const result = await axios.get('https://localhost:7223/Api/Categories/GetCategories');
            const data = result.data;
            console.log(data);
            //SetCategories(Categories => [...Categories, data]);
            //SetCategories(Categories.toString().split(','));

            SetCategories(data.split(','));

        };
        response();

    }, []);

    console.log("Categories response3 ->  ", Categories)
    //SetCategories(Categories[1]);
    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setprops(props => ({ ...props, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");

        if (!token || token == "undefined") {
            history("/Login")
        }
        console.log(token)
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
        const post = {
            "ShopCode": props.ShopCode,
            "Category": props.Category,
            "Price": props.Price,
            "DiscountedPrice": props.DiscountedPrice,
            "Discription": props.Discription,
            "Title": props.Title
        }
        console.log('post in set product ->>>', post)
        // try {
        //     axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
        //     const response = await axios.post("https://localhost:7223/Api/Products/SetProduct",     //`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
        //         post);

        //     console.log("Shop creation response.data ->  ",response.data)
        //     history('/')
        // }
        // catch (error) {
        //     console.log("Sho creatation error -> ", error)
        // }
    }

    return (<>
        <div className="row">
            <div className="Col-6">
                <form onSubmit={handleSubmit}>
                    <div class="container mt-6">
                        <h4> Add Product </h4>
                        <div class="mb-6">
                            <label for="ShopCode" class="form-label">Product Name:
                                <input type="text" name="ShopCode" class="form-control" id="ShopCode" value={props.ShopCode || ''} onChange={handleInput} />
                            </label>
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        {/* <Dropdown placeholder="Select an option" value={defaultOption} /> */}
                        
                        <div class="mb-6">
                            <label for="ShopCode" class="form-label">
                                Category:
                                <Dropdown onSelect={function (evt) { props.Category = evt; }}  >
                                    <Dropdown.Toggle variant="info" id="category" >
                                        Select Category
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {Categories.map(Category => (
                                            <Dropdown.Item value={Category} eventKey={Category}>
                                                {Category}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </label>
                        </div>

                        <div class="mb-6">
                            <label for="Price" class="form-label">Price:
                                <input type="text" class="form-control" name="Price" id="Price" value={props.Price || ''} onChange={handleInput} />
                            </label>
                        </div>

                        <div class="mb-6">
                            <label for="DiscountedPrice" class="form-label">Discounted Price:
                                <input type="text" class="form-control" name="DiscountedPrice" id="DiscountedPrice" value={props.DiscountedPrice || ''} onChange={handleInput} />
                            </label>
                        </div>
                        <div class="mb-6">
                            <label for="Discription" class="form-label">Discription:
                                <input type="text" class="form-control" name="Discription" id="Discription" value={props.Discription || ''} onChange={handleInput} />
                            </label>
                        </div >
                        <div class="mb-6">
                            <label for="Title" class="form-label">Title:
                                <input type="text" class="form-control" name="Title" id="Title" value={props.Title || ''} onChange={handleInput} />
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div >
                </form >
            </div>
            <div className="Col-6">
                <div className="col-4 flex">
                    <div className="img-wrap">
                        <img className="img-fluid" src={AddToCartIcon} ></img>
                    </div>
                    <div className="information">
                        <div>
                            <h4 className="">{'Title'}</h4>
                            <h2 className="">{'Description'}</h2>
                            <div className="pricing">
                                <span>{45}</span>
                                <small>
                                    <strike>{50}</strike>
                                </small>
                            </div>
                        </div>
                        <div className="cart-addon cart-addon__modal">
                            <button onClick={() => { }}>-</button>
                            <span className="counter">{"Add To Cart"}</span>
                            <button onClick={() => { }}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ShopProduct;

// import { Form } from "react-bootstrap";
// import { Field, ErrorMessage } from "formik";    // npm install formik --save   =>Formik is the world's most popular open source form library for React and React Native.
// import axios from "axios";
// import { useState, useEffect } from "react";

// function ShopProduct() {
//     const props = useState();
//     const [options, setOptions] = useState([]);

//     // useEffect(() => {
//     //     async function fetchData() {
//     //         // Fetch data
//     //         const { data } = await axios.get("https://localhost:7223/Api/Categories/SetCategory");
//     //         const results = []
//     //         // Store results in the results array
//     //         data.forEach((value) => {
//     //             results.push({
//     //                 key: value.name,
//     //                 value: value.id,
//     //             });
//     //         });
//     //         // Update the options state
//     //         setOptions([
//     //             { key: 'Select a company', value: '' },
//     //             ...results
//     //         ])
//     //     }

//     //     // Trigger the fetch
//     //     fetchData();
//     // }, []);

//     const { label, name, ...rest } = props;

//     return (<>
//     <h1>Hi</h1>
//         <Form.Group className="mb-2">
//             <Form.Label htmlFor={name}>{label}</Form.Label>
//             <Field type="email" name="email" placeholder="Email" />
//            {/* <Field as="select" name="color">
//              <option value="red">Red</option>
//              <option value="green">Green</option>
//              <option value="blue">Blue</option>
//            </Field> */}
//             {/* <Field >
//              {options.map((option) => {
//                     return (
//                         <option key={option.value} value={option.value}>
//                             {option.key}
//                         </option>
//                     );
//                 })}
//             </Field>  */}
//             {/* <ErrorMessage className="text-danger" name={name} component={Form.Text} /> */}
//         </Form.Group>
//         </>
//     );
// }

// export default ShopProduct;

