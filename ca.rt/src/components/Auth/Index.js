import { Fragment, useEffect, useState } from "react"
import { NavLink, useHistory, useParams } from "react-router-dom"
import Loader from "../UI/Loader"
import { useDispatch } from "react-redux"
import { getValue } from "@testing-library/user-event/dist/utils"
//import { loginWithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/auth"

const AuthIndex = () => {
    const [details, setDetails] = useState({
        email:"",
        password:""
    })
    const params = useParams();
    console.log(params);

    const handleInput = e => {
        console.log({
            name: e.target.name,
            value: e.target.value
        })
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmission = e =>{
        e.preventDefault();
        console.log(details);
    }

    return (
        <Fragment>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete={"off"} onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                value={details.email} 
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter Password" 
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {params.login === "login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* { loader && <Loader/> } */}
        </Fragment>
    )
}

export default AuthIndex;