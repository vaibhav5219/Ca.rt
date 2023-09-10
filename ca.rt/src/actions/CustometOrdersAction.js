import axios from "axios";

export const SetCustomerOrders_Dispatch = (callback) => {

    return (async (dispatch) => {
        try {
            const token = localStorage.getItem("token");
            console.log('dispatch ', token)
            if (!token || token == "undefined") {
                //history("/Login")
                return 0;
            }
            const headers = {
                Authorization: `Bearer ${token}`
            }

            // const authState = useSelector(state => state.auth)
            const response = await axios.get('https://localhost:7223/Api/Orders/GetCustomerOrders', { headers });

            callback(response.data);

            dispatch({
                type: 'SET_CUSTOMER_ORDERS',
                payload:{
                    data: response.data
                }
            })

            console.log('SET_CUSTOMER_ORDERS after dispatch ', response.data)
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