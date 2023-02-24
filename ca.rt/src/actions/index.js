import axios from "axios"

export const additemhandler = (item, dispatch) =>  {
    //console.log("this is item==>>",item)
    return dispatch({
        type: "ADD_ITEM",
        payload:{
            item: item
        }
    })
}

export const removeitemhandler = (id, dispatch) => {
    return dispatch({
        type: "REMOVE_ITEM",
        payload:{
            id: id
        }
    })
}

export const clearCartHandler = () => dispatch => {
    return dispatch => {
        dispatch({
            type:"CLEAR_CART"
        })
    }
}

export const placeOrderhandler = (callback) => {
    return async (dispatch, getState) => {
        const {auth, cart} = getState()
        try 
        {
            console.log("cart  => ",cart," user unique id =  auth.Id ", auth.localId)
            if(!auth.localId)
            {
                return  callback({
                    error: true,
                    data: {
                        error: "Please login to place the order."
                    }
                })
            }

            const response = await axios.post(`https://react-cart-api-2023-default-rtdb.firebaseio.com/Orders/${auth.localId}.json?auth=${auth.idToken}`,{
                ...cart
            })
            dispatch({
                type: "CLEAR_CART"
            })
            console.log("auth =>",auth)
            console.log("getState => ",getState())
            console.log("cart => ",cart)
            console.log("Response =>",response)
            return callback({
                error: false,
                data: response.data
            })
        }
        catch (error) {
            console.log("Not authenticated - getState => ",getState())

            return callback({
                error: true,
                ...error.response
            })
        }
    }
}