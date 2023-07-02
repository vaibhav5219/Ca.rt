import axios from "axios";


const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';
//const BASE_URL = 'https://localhost:44382/'
const API_KEY = 'AIzaSyBVA436B2-zQ9EFjZqqDy1no1jcBdMHdwY';
// POST api/Account/Register
// POST api/Account/Register  => for role -:   IsAShop
// Register for shop  '/api/Account/Register/Shop'

export const signupWithEmailAndPassword = (details, callback) => {
    console.log("Before Signup call :- ",details)
    return async(dispatch) => {
        try {
            console.log("Before signup call => ")
            const response = await axios.post("https://localhost:7223/api/Account/Register",         //`${BASE_URL}/accounts:signUp?key=${API_KEY}`,
            {
                email : details.email,
                password : details.password,
                confirmPassword : details.password,
                isShopkeeper :details.wantShop
                //returnSecureToken : true
            });
            console.log('response after Signup => ',response)
            callback(response.data);
            dispatch({
                type: 'SIGNUP',
                payload: response.data
            })
            return callback(response.data)
        }
        catch(error) {
            console.log("Error Message=> ",error.response)
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
    // const headers = {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    // };
    return (async(dispatch) => {
        try {
            const response = await axios.post("https://localhost:7223/Api/Account/Login",     //`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
            {
                username : details.email,
                //email : details.email,
                password : details.password,
                //returnSecureToken : true
            });

            //console.log('response => ',response)
            callback(response.data);
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            localStorage.setItem("token",response.data.token)
            console.log('Token/response.data.token => ', response.data.token)
            return callback(response.data)
        }
        catch(error) {
            console.log("Error message ",error.response)
            console.log("Error message ",error)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
    )
}

export const checkIsLoggedIn = callback => {
    return async(dispatch) => {
        try {
            let token = localStorage.getItem("token");
            if(!token || token=="undefined"){
                return;
            }
            const response = await axios.post("https://localhost:7223/Api/Account/Login",//`${BASE_URL}/accounts:lookup?key=${API_KEY}`,
            {
                idToken: token
            });
            dispatch({
                type: 'LOGIN',
                payload: {
                    idToken: token,
                    localId: response.data.users[0].localId,
                    ...response.data
                }
            })
            localStorage.setItem("token",response.data.idToken)
            return callback(response.data)
        }
        catch(error) {
            //console.log("Error message ",error.response)
            console.log("Error message ",error)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const logout =  () => {
    return dispatch => {
        localStorage.removeItem("token")
        dispatch({
            type:"LOGOUT"
        })
    }
}