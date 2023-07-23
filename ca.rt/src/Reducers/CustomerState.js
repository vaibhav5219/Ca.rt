const CustomerReducer = (state = {
        IsACustomer : 0,
        IsACustomerExists : 0,
        CustomerName : '',
}, action ) => {
    const {type, payload} = action
    console.log(type)
    switch(type)
    {
        case 'ISACUSTOMER':{
            //state.Role.IsACustomer = 1;
            return {
                ...state,
                IsACustomer: payload.data
            }
        }
        case 'CUSTOMERNAME':{
            return {
                ...state,
                CustomerName: action.payload.data
            }
        }
        case 'ISACUSTOMEREXISTS':{
            //state.Role.IsACustomerExists = 1;
            return {
                ...state,
                IsACustomerExists: payload.data
            }
        }
        case 'CLEARCUSTOMER':{
            //state.Role.IsACustomerExists = 1;
            return {
                IsACustomer : 0,
                IsACustomerExists : 0,
                CustomerName : '',
            }
        }
        default: return state;
    }
}

export default CustomerReducer