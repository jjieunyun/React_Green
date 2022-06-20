import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        //⭐initialState의 state를 자동으로 받아온다
        increment : (state) => {
            state.count +=1;
        },
        decrement : (state) => {
            state.count -=1;
        },
        reset: (state)=> {
            state.count =0;
        },
        incrementByAmount : (state, action) => {
            state.count += action.payload;
        }
    }
});

//reducers : 리듀서를 작성합니다. 이때 해당 리듀서의 키값으로 액션함수가 자동으로 생성됩니다..
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;  
export default counterSlice.reducer;