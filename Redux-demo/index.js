//import { legacy_createStore as createStore} from 'redux'

const redux = require("redux");
const thunk = require("redux-thunk").default;

const rootReducer = (state = {count : 0}, action) =>{
    switch(action.type){
        case 'INCREMENT':{
            return {
                count : state.count + 1
            }
        }
        case 'DECREMENT':{
            return {
                count : state.count - 1
            }
        }
        case 'INCREMENT_BY_VALUE':{
            return {
                count : state.count + action.payload.value
            }
        }
        case 'DECREMENT_BY_VALUE':{
            return {
                count : state.count - action.payload.value
            }
        }
        default: return state
    }
    // console.log({
    //     state,
    //     action
    // })

}

const store = redux.createStore(rootReducer,{
    count: 0
},
redux.applyMiddleware(thunk))

const triggeredOnStoreUpdate = () => {
    const data = store.getState();
    console.log(data);
}

store.subscribe(triggeredOnStoreUpdate);


const incrementcounter = value =>{
    return (dispatch) => {
        let type = "INCREMENT"
        let payload = {}
        if(value){
            type = "INCREMENT_BY_VALUE"
            payload.value = value
        }
        dispatch({
            type,
            payload
        })
    }
}
const decrementcounter = value =>{
    return (dispatch) => {
        let type = "DECREMENT"
        let payload = {}
        if(value){
            type = "DECREMENT_BY_VALUE"
            payload.value = value
        }
        dispatch({
            type,
            payload
        })
    }
}
store.dispatch(incrementcounter())
store.dispatch(decrementcounter())
store.dispatch(incrementcounter(Math.floor(Math.random() * 1000)))  // Math.floor(Math.random() * 1000) = this value can be asyc/ fetched by webapi
store.dispatch(decrementcounter(Math.floor(Math.random() * 1000)))  // so we can introduce  SideEffect in this function 
