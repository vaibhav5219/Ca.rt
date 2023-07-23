import { Fragment, useEffect, useState } from "react"
import { NavLink, useHistory, useNavigate, useParams } from "react-router-dom"
import Loader from "../UI/Loader"
import { useDispatch, useSelector } from "react-redux"
import { loginWithEmailAndPassword, signupWithEmailAndPassword, IsShopExists, IsCustomerExists } from "../../actions/auth"
import axios from "axios";
import store from '../../Store/index'

const AuthIndex = () => {

    const [details, setDetails] = useState({
        email: "",
        password: "",
        wantShop: false
    })
    const [loader, setLoader] = useState(false);
    const params = useParams();
    console.log(params);
    const dispatch = useDispatch();
    const history = useNavigate();
    const CustomerState = useSelector(store => store.Customer)
    const ShopState = useSelector(store => store.Shop)
    const state = store.getState()

    const handleInput = e => { // For handle memory leackage
        console.log({
            name: e.target.name,
            value: e.target.value
        })
        // if(e.target.name=='wantShop'){
        //     e.target.value = e.target.value == 'on' ? Boolean(true) : Boolean(false);
        // }
        setDetails({
            ...details,
            [e.target.name]: e.target.name == 'wantShop' ? e.target.checked : e.target.value
        })
    }
    // useEffect((e) => {
    //     return () => {
    //         // setLoader(false)
    //         setDetails({
    //             email: "",
    //             password: "",
    //             wantShop: Boolean(false)
    //             //wantShop: !e.target.wantShop.value
    //         })
    //     }
    // }, [])

    // useEffect(() => {
    //     console.log("details.wantShop is: ", details.wantShop);
    // }, [details.wantShop]);

    const handleSubmission = e => {
        e.preventDefault();
        console.log("Before register/Login api call", details);
        if (params.login == 'signup') {
            //setLoader(previousState => !previousState);

            console.log("Before useDispatch ", signupWithEmailAndPassword);
            dispatch(signupWithEmailAndPassword(details, data => {
                if (data.error) {
                    console.log("Error=> ", data.error)
                    alert("Some error occured")
                    if (details.wantShop == true) {
                        history("/ShopForm")
                    } else {
                        history("/CustomerForm")         //history("/");
                    }
                } else {
                    console.log("Successfully sign up!")
                    if (details.wantShop == true) {
                        history("/ShopForm")
                    } else {
                        history("/CustomerForm")         //history("/");
                    }
                }
                //setLoader(previousState => !previousState);
            }
            ))  // second parameter is callback function
        }
        else if (params.login === "login") {
            //console.log("Before login Dispatch ", loginWithEmailAndPassword)
            dispatch(loginWithEmailAndPassword(details,
                data => {
                    if (data?.error == true || data?.response?.data?.status == 401) {
                        console.log('data.status = 401 => ', data)
                        alert(data?.response?.data?.error?.message || "Some error occured")
                    } else {
                        console.log('data.status => ', data)
                        console.log("Successfully Log In! , Details => ", data.loggedInAs)
                        console.log("Details 1 => ", details)

                        if (data.loggedInAs == "IsACustomer") {
                            console.log(state, "  >>>>>>> auth role 99")
                            console.log(state, "  >>>>>>> auth role 99")
                            try {
                                console.log("in Else>>>>>>");
                                // const loginFlag = IsShopExists();
                                const response = (async () => await IsCustomerExists())();
                                response.then((result) => {
                                    console.log(result, "<< loginFlag");
                                    dispatch({
                                        type: 'ISACUSTOMER',
                                        payload: {
                                            data: 1
                                        }
                                    })
                                    dispatch({
                                        type: 'CUSTOMERNAME',
                                        payload: {
                                            data: details.email
                                        }
                                    })
                                    if (result) {
                                        // state.auth.Role.IsACustomerExists = 1;
                                        dispatch({
                                            type: 'ISACUSTOMEREXISTS',
                                            payload: {
                                                data: 1
                                            }
                                        })
                                        console.log(" ALL CUSTOMER STATE SET")
                                        history("/")
                                    } else {
                                        dispatch({
                                            type: 'ISACUSTOMEREXISTS',
                                            payload: {
                                                data: 0
                                            }
                                        })
                                        history("/CustomerForm")
                                    }
                                })
                            }
                            catch (error) {
                                console.log("IsCustomerExists ERROR ", error)
                            }
                        } else {
                            try {
                                const response = (async () => await IsShopExists())();
                                //state.Shop.Role.ShopName = details.email;
                                response.then((result) => {
                                    dispatch({
                                        type: 'ISASHOP',
                                        payload: {
                                            data: 1
                                        }
                                    })
                                    console.log("Details 2 => ", details)
                                    dispatch({
                                        type: 'SHOPNAME',
                                        payload: {
                                            data: details.email
                                        }
                                    })
                                    if (result) {
                                        dispatch({
                                            type: 'ISASHOPEXISTS',
                                            payload: {
                                                data: 1
                                            }
                                        })
                                        console.log(" ALL SHOP STATE SET")
                                        history("/")
                                    }
                                    else {
                                        //console.log("before set state.auth.Role.IsAShop2  =>>>>>> ", state.auth.Role.IsAShopExists)
                                        dispatch({
                                            type: 'ISASHOPEXISTS',
                                            payload: {
                                                data: 0
                                            }
                                        })
                                        //console.log("state.auth.Role.IsAShopExists2 =>>>>>> ", state.auth.Role.IsAShopExists)
                                        history("/ShopForm")
                                    }
                                })
                            }
                            catch (error) {
                                console.log("Is Shop Exists ERROR ", error)
                            }
                        }
                    }
                    //setLoader(previousState => !previousState);
                })
            )
        }
    }

    return (
        <Fragment>
            <div className="auth-container component-class" >
                <div className="auth-container--box" style={{ background: '#00bfff', position: "relative" }}>
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
                        {
                            params.login != "login" ?
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        id="isShopkeeper"
                                        name="wantShop"
                                        checked={details.wantShop}
                                        onChange={handleInput}
                                    />
                                    <label className="form-check-input-label" htmlFor="isShopkeeper">Want A Shop</label>
                                </div>
                                :
                                <></>
                        }
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