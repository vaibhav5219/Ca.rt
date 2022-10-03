//import { legacy_createStore as createStore} from 'redux'

const redux = require("redux");

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
})

const triggeredOnStoreUpdate = () => {
    const data = store.getState();
    console.log(data);
}

store.subscribe(triggeredOnStoreUpdate);
store.dispatch({
    type: "INCREMENT"
})
store.dispatch({
    type: "DECREMENT"
})
store.dispatch({
    type: "INCREMENT_BY_VALUE",
    payload: {
        value: Math.floor(Math.random() * 1000)
    }
})
store.dispatch({
    type: "DECREMENT_BY_VALUE",
    payload: {
        value: Math.floor(Math.random() * 1000)
    }
})