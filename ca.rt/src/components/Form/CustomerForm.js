import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CustomerForm = (getState) => {

    const [ props, setprops ] = useState({})
    const history = useNavigate();
    
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setprops(props => ({...props, [name]: value}))

        console.log('props -> ',props)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Handle Submit ")
        const token = localStorage.getItem("token");

        if(!token || token=="undefined"){
            history("/Login")
        }
        
        try
        {

            //console.log(auth.token)
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            console.log("Auth-> ",axios.defaults.headers)
            const post = {
                "CustomerName" : props.CustomerName,
                "Mobile" : props.MobileNumber,
                "Username" : props.Username,
                "Address" : props.Address,
                "Email" : "" 
            }
            const response = await axios.post("https://localhost:7223/Api/Customers/CreateCustomer"     //`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
            ,post);

            console.log(response.data)
            history('/')
        }
        catch(error)
        {
            console.log("Error -> ", error)
        }
        alert(props.Address);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="container mt-6" style={{textAlign:"center"}}>
                    <h4> Customer Form</h4>
                    <div class="mb-6">
                        <label for="customername" class="form-label">Name:
                            <input type="text" name="CustomerName" class="form-control" id="customername" value={props.CustomerName || ""} onChange={handleInput}/>
                        </label>
                    </div>
                    <div class="mb-6">
                        <label for="mobilenumber" class="form-label">Mobile Number:
                            <input type="text" name="MobileNumber" class="form-control" id="mobilenumber" value={props.MobileNumber || ""}  onChange={handleInput}/>
                        </label>
                    </div >
                    <div class="mb-6">
                        <label for="username" class="form-label">Username:
                            <input type="text" name="Username" class="form-control" id="username" value={props.Username || ""}  onChange={handleInput}/>
                        </label>
                    </div>
                    <div class="mb-6">
                        <label for="address" class="form-label">Address:
                            <input type="number" step="1" name="Address" class="form-control" id="address" value={props.Address || ""}  onChange={handleInput}/>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary form-label">Submit</button>
                </div >
            </form >
        </>
    )
}

export default CustomerForm;