import axios from "axios";


const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';
const API_KEY = 'AIzaSyBVA436B2-zQ9EFjZqqDy1no1jcBdMHdwY';

export const signupWithEmailAndPassword = (details, callback) => {
    return async(dispatch) => {
        try {
            console.log("Before signup call => ")
            const response = await axios.post(`${BASE_URL}/accounts:signUp?key=${API_KEY}`,
            {
                email : details.email,
                password : details.password,
                returnSecureToken : true
            });
            console.log(response)
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
    return (async(dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
            {
                email : details.email,
                password : details.password,
                returnSecureToken : true
            });
            console.log(response)
            callback(response.data);
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            localStorage.setItem("token",response.data.idToken)
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
            const response = await axios.post(`${BASE_URL}/accounts:lookup?key=${API_KEY}`,
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