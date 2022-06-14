//🍎configureStore를 CreateStore대신 사용하자~
/*
createStore를 할때 ❓ combineReducer를 사용해서 RootReducer로 묶어야했다.
RootReducer
Thunk
applyMiddleware
composeWithDevTools ➡ 이제 이 4개는 안써도된다.
*/

import { comfigureStore }   from '@reduxjs/toolkit'
import counterSlice from '../modules/counterToolkit'

const store = comfigureStore({
    reducer : {
        couter : counterSlice,
    }
})

export default store;