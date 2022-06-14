import { createStore } from "redux";

//🍎store 생성
const reducer = (state, action) => {
    if(state === undefined) {
        return {number : 0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
}

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ ())