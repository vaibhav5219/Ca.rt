const mainReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case 'ADD_ITEM':{
            let items = [...state.items]
            let index = items.findIndex(item => item.id === payload.item.id)
            if(index > -1){
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity+1
                }
            }else{
                items.push({
                    ...payload.item,
                    quantity: 1
                })
            }
            return {
                ...state,
                items: items
            }
        }
        case 'REMOVE_ITEM':{
            let items = [...state.items]
            let index = items.findIndex(item => item.id === payload.id)
            if(items[index].quantity === 1){
                items.splice(index, 1)
            }else if(items[index].quantity > 1){
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity - 1
                }
            }
            return{
                ...state,
                items: items
            }
        }
        case 'CLEAR_CART':
            return {
                Item:[],
                totalAmount:0
            }
        default: return state;
    }
}

export default mainReducer