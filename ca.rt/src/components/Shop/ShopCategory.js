import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const ShopCategory = () => {
    const [props, setprops] = useState({})
    const history = useNavigate()

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
        console.log('token in shop category ---->>>>> <<<<----',token)
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
        const post = {
            "ShopCode": props.ShopCode,
            "Description": props.Description,
            "CategoryName": props.CategoryName,
        }
        try {
            const response = await axios.post("https://localhost:7223/Api/Categories/SetCategory",     //`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
                post);

            console.log("Shop creation response.data ->  ",response.data)
            history('/')
        }
        catch (error) {
            console.log("Sho creatation error -> ", error)
        }
    }



    return (<>
        <form onSubmit={handleSubmit}>
                <div class="container mt-6" >
                    <div class="mb-6">
                        <label for="CategoryName" class="form-label">Category Name:
                            <input type="text" name="CategoryName" class="form-control" id="CategoryName" value={props.CategoryName || ''} onChange={handleInput}  />
                        </label>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>

                    <div class="mb-6">
                        <label for="Description" class="form-label">Category Description:
                            <input type="text" class="form-control" name="Description" id="Description" value={props.Description || ''} onChange={handleInput} />
                        </label>
                    </div>

                    <div class="mb-6">
                        <label for="ShopCode" class="form-label">SH.OP Code:
                            <input type="text" class="form-control" name="ShopCode" id="ShopCode" value={props.ShopCode || ''} onChange={handleInput} />
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div >
            </form >
    </>)
}
export default ShopCategory;