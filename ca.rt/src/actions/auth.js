import axios from "axios";


const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/';
const API_KEY = 'AIzaSyBVA436B2-zQ9EFjZqqDy1no1jcBdMHdwY';

export const signupWithEmailAndPassword = () => async (details, callback) => {
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
            console.log(error.response)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const loginWithEmailAndPassword = () => async (details, callback) => {
    console.log("callBack metod in loginWithEmailAndPassword method ")
    return (
        async(dispatch) => {
        try {
            console.log("Before Login post");
            
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
            return callback(response.data)
        }
        catch(error) {
            console.log(error.response)
            return callback({
                error: true,
                response: error.response
            })
        }
    }
    )
}