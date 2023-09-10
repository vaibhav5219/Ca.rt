const ShopReducer = (state = {
    IsAShop: 0,
    IsAShopExists: 0,
    ShopName: '',
    ShopCode: '',
}, action) => {
    const { type, payload } = action
    console.log(type)

    switch (type) {
        case 'ISASHOP': {
            //state.Role.IsAShop = 1;
            return {
                ...state,
                IsAShop: payload.data
            }
        }
        case 'ISASHOPEXISTS': {
            //state.Role.IsACustomerExists = 1;
            return {
                ...state,
                IsAShopExists: payload.data
            }
        }
        case 'SHOPNAME': {
            return {
                ...state,
                ShopName: action.payload.data
            }
        }
        case 'SHOPCODE': {
            return {
                ...state,
                Shop: action.payload.data
            }
        }
        case 'CLEARSHOP': {
            //state.Role.IsACustomerExists = 1;
            return {
                IsAShop: 0,
                IsAShopExists: 0,
                ShopName: '',
                ShopCode: ''
            }
        }
        default: return state;
    }
}

export default ShopReducer