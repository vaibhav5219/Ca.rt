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
            console.log("cart in placeorderhandler  => ",JSON.stringify(cart))
            console.log("auth in placeorderhandler  => ",auth)
            console.log(" cart.items ==> ", JSON.stringify(cart.items))
            if(!auth.token)
            {
                return  callback({
                    error: true,
                    data: {
                        error: "Please login to place the order."
                    }
                })
            }
            const post = cart.items
            console.log("cart.items for orders =>>>>>", cart.items)
            axios.defaults.headers.common = {'Authorization': `Bearer ${auth.token}`}
            const response = await axios.post("https://localhost:7223/api/orders/PlaceOrder"  //`https://react-cart-api-2023-default-rtdb.firebaseio.com/Orders/${auth.localId}.json?auth=${auth.idToken}`
            ,post)
            // dispatch({
            //     type: "CLEAR_CART"
            // })
            console.log("auth after post order api call =>",auth)
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
                error: true
            })
        }
    }
}
