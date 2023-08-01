import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
// import { useForm } from "react-hook-form";

const ShopForm = () => {
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
        console.log(token)
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
        const post = {
            "ShopCode": props.ShopCode,
            "ShopDomainName": props.ShopDomainName,
            "ShopName": props.ShopName,
            "ShopKeeperName": props.ShopKeeperName,
            "Mobile": props.MobileNumber,
            "Address": props.Address,
            "PinCode": props.PinCode
        }
        try {
            const response = await axios.post("https://localhost:7223/Api/ShopDetails/CreateShop",     //`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
                post);

            console.log("Shop creation response.data ->  ", response.data)
            history('/')
        }
        catch (error) {
            console.log("Sho creatation error -> ", error)
        }
    }


    return (
        <>

            <div className="Row-6">
                <form onSubmit={handleSubmit} >
                    <div class="container mt-6" style={{ textAlign: "center" }}>
                        <h4> Shop Form </h4>
                        <div class="mb-6">
                            <label for="ShopCode" class="form-label">Shop Code:
                                <input type="text" name="ShopCode" class="form-control" id="ShopCode" value={props.ShopCode || ''} onChange={handleInput} />
                            </label>
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div class="mb-6">
                            <label for="ShopName" class="form-label">Shop Name:
                                <input type="text" name="ShopName" class="form-control" id="ShopName" value={props.ShopName || ''} onChange={handleInput} />
                            </label>
                        </div>

                        <div class="mb-6">
                            <label for="ShopDomainName" class="form-label">Shop Domain Name:
                                <input type="text" class="form-control" name="ShopDomainName" id="ShopDomainName" value={props.ShopDomainName || ''} onChange={handleInput} />
                            </label>
                        </div>

                        <div class="mb-6">
                            <label for="ShopKeeperName" class="form-label">Shop ShopKeeper Name:
                                <input type="text" class="form-control" name="ShopKeeperName" id="ShopKeeperName" value={props.ShopKeeperName || ''} onChange={handleInput} />
                            </label>
                        </div>
                        <div class="mb-6">
                            <label for="MobileNumber" class="form-label">Mobile Number:
                                <input type="text" class="form-control" name="MobileNumber" id="MobileNumber" value={props.MobileNumber || ''} onChange={handleInput} />
                            </label>
                        </div >
                        <div class="mb-6">
                            <label for="Address" class="form-label">Address:
                                <input type="number" step={1} class="form-control" name="Address" id="Address" value={props.Address || ''} onChange={handleInput} />
                            </label>
                        </div>
                        <div class="mb-6">
                            <label for="PinCode" class="form-label">Pin Code:
                                <input type="text" class="form-control" name="PinCode" id="PinCode" value={props.PinCode || ''} onChange={handleInput} />
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div >
                </form >
            </div>
        </>
    )
}

export default ShopForm;