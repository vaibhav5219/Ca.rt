export const additemhandler = (item) =>  {
    console.log("this is item==>>",item)
    return dispatch({
        type: "ADD_ITEM",
        payload:{
            item: item
        }
    })
}

export const removeitemhandler = id => {
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
