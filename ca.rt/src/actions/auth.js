import axios from "axios";
import { resolvePath, useNavigate } from "react-router-dom";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';
//const BASE_URL = 'https://localhost:44382/'
const API_KEY = 'AIzaSyBVA436B2-zQ9EFjZqqDy1no1jcBdMHdwY';
// POST api/Account/Register
// POST api/Account/Register  => for role -:   IsAShop
// Register for shop  '/api/Account/Register/Shop'

export const signupWithEmailAndPassword = (details, callback) => {
    console.log("Before Signup call :- ", details)
    return async (dispatch) => {
        try {
            console.log("Before signup call => ")
            const response = await axios.post("https://localhost:7223/api/Account/Register",         //`${BASE_URL}/accounts:signUp?key=${API_KEY}`,
                {
                    email: details.email,
                    password: details.password,
                    confirmPassword: details.password,
                    isShopkeeper: details.wantShop
                    //returnSecureToken : true
                });
            console.log('response after Signup => ', response)
            callback(response.data);
            dispatch({
                type: 'SIGNUP',
                payload: response.data
            })
            return callback(response.data)
        }
        catch (error) {
            console.log("Error Message=> ", error.response)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const loginWithEmailAndPassword = (details, callback) => {
    console.log("details => ", details)
    console.log("callBack metod in loginWithEmailAndPassword method ")

    return (async (dispatch) => {
        try {
            // const authState = useSelector(state => state.auth)
            const response = await axios.post("https://localhost:7223/Api/Account/Login",     //`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
                {
                    username: details.email,
                    //email : details.email,
                    password: details.password,
                    //returnSecureToken : true
                });

            //console.log('response => ',response)
            callback(response.data);
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })

            // if(response.data.loggedInAs == "IsACustomer")
            // {
            //     authState.Role.IsACustomer = true;
            // }else{
            //     authState.Role.IsACustomer = true;
            // }

            localStorage.setItem("token", response.data.token)
            console.log('Token/response.data.token => ', response.data.token)
            return callback(response.data)
        }
        catch (error) {
            console.log("Error message1 ", error.response)
            console.log("Error message2 ", error)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
    )
}

export const checkIsLoggedIn = callback => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem("token");
            if (!token || token == "undefined") {
                return;
            }
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            const response = await axios.post("https://localhost:7223/Api/Account/Login");
            dispatch({
                type: 'LOGIN',
                payload: {
                    idToken: token,
                    localId: response.data.users[0].localId,
                    ...response.data
                }
            })
            localStorage.setItem("token", response.data.tokenoken)
            return callback(response.data)
        }
        catch (error) {
            //console.log("Error message ",error.response)
            console.log("Error message ", error)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token")
        dispatch({
            type: "LOGOUT"
        })
        dispatch({
            type: 'CLEARCUSTOMER'
        })
        dispatch({
            type: 'CLEARSHOP'
        })
    }
}

export const IsShopExists = async () => {

    console.log(" INSIDe IS SHop Exist fn");
    try {
        return new Promise((resolve, reject) => {
            console.log("inside is shop existtttttt");
            let token = localStorage.getItem("token");
            if (!token || token == "undefined") {
                return;
            }
            console.log("line 130 of is shop")
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            console.log("line 132 of registr");
            // const response = await axios.get("https://localhost:7223/Api/ShopDetails/IsShopExists");
            // response.then((result)=>{
            //     console.log(response,"<< response in auth.js");
            // })

            const response = (async () => await getShopDetails())();
            response.then((result) => {
                if (result.data.isShopRegistered == true) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
        })
    }
    catch (error) {
        console.log("IsCustomerExists ERROR ", error)
    }
}

function getShopDetails() {
    return new Promise((resolve, reject) => {
        axios.get("https://localhost:7223/Api/ShopDetails/IsShopExists").then((resp) => {
            resolve(resp);
        }).catch(err => reject(err));
    })
}

export const IsCustomerExists = async () => {

    console.log(" INSIDe IS CUSTOMER Exist fn");
    try {
        return new Promise((resolve, reject) => {
            console.log("inside is CUSTOMER existtttttt");
            let token = localStorage.getItem("token");
            console.log(token,"<<<< token of line 175")
            if (!token || token == "undefined") {
                return;
            }
            console.log("line 130 of is CUSTOMER")
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            console.log("line 132 of registr");

            const response = (async () => await getCustomerDetails())();
            response.then((result) => {
                if (result.data.isCustomerRegistered) {
                    //console.log("Response & Result & result.data.IsCustomerRegistered & true => ",result.data.IsCustomerExists)
                    resolve(true);
                } else {
                    //console.log("Response & Result & result.data.IsCustomerRegistered & false => ",result)
                    resolve(false);
                }
            })
        })
    }
    catch (error) {
        console.log("IsCustomerExists ERROR ", error)
    }
}
function getCustomerDetails() {
    return new Promise((resolve, reject) => {
        axios.get("https://localhost:7223/Api/Customers/IsCustomerExists").then((resp) => {
            resolve(resp);
        }).catch(err => reject(err));
    })
}