import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = (state, action) =>{
    return state;
}

const store = createStore(
    rootReducer,
    {
        items:[],
        totalAmount:0
    },
    composeWithDevTools(applyMiddleware(thunk))
);

export default store
