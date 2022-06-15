import { configureStore } from "@reduxjs/toolkit";

//import reducer I created
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
    reducer : {
        posts : postsReducer,
    }
})

//❓❓store의 reducer는 또 전체 state와 action을 가지고있고 ->
//state중에서 posts의 state를 가져올 것이므로 state.posts를 해주면된다..!!???❓❓
//reducer의 state로 들어가기때문에 state.post로 