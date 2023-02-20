import { Fragment, useEffect, useState } from "react"
import { NavLink, useHistory, useNavigate, useParams } from "react-router-dom"
import Loader from "../UI/Loader"
import { useDispatch } from "react-redux"
import { getValue } from "@testing-library/user-event/dist/utils"
import { loginWithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/auth"


const AuthIndex = () => {
    const [details, setDetails] = useState({
        email:"",
        password:""
    })
    const [loader, setLoader] = useState(false);
    const params = useParams();
    console.log(params);
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleInput = e => { // For handle memory leackage
        console.log({
            name: e.target.name,
            value: e.target.value
        })
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        return  ()=>{
            // setLoader(false)
            setDetails({
                email:"",
                password:""
            })
        }
    },[])

    const handleSubmission = e =>{
        e.preventDefault();
        console.log(details);
        if(params.login == 'signup'){
            //setLoader(previousState => !previousState);

            console.log("Before useDispatch ", signupWithEmailAndPassword);
            dispatch (signupWithEmailAndPassword(details, data =>{
                if(data.error){
                    console.log("Error=> ",data.error)
                    alert("Some error occured")
                }else{
                    console.log("Successfully sign up!")
                    history("/");
                }
                //setLoader(previousState => !previousState);
            }
            ))  // second parameter is callback function
        }
        else if (params.login === "login"){

            console.log("Before login Dispatch ",loginWithEmailAndPassword)

            dispatch(loginWithEmailAndPassword(details,
                data => {
                if(data.error){
                    console.log(data.response)
                    alert(data?.response?.data?.error?.message || "Some error occured" )
                }else{
                    console.log("Successfully Log In!")
                    history("/");
                }
                //setLoader(previousState => !previousState);
            })
            )
        }
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