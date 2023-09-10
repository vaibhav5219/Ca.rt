const CustomerOrdersState = ( state = {
    orders : []
} , action) => {
    const {type, payload} = action
    console.log('type ----->', type)
    console.log('payload ----->', payload)
    switch(type)
    {
        // We csn't get orders(reducers)
        // case 'GET_CUSTOMERS_ORDERS':{
        //     return payload.orders
        // }

        case 'SET_CUSTOMER_ORDERS' :{
            // let orders = [...state.orders]
            // orders.push({
            //      ...payload.orders,
            // })

            return {
                ...state,
                orders: payload.data  // Set the orders lists
            }
        }

        default:{ 
            return ''
        }
    }
}

export default CustomerOrdersState