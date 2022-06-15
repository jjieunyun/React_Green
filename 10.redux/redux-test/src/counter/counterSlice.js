import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    number : 0
}

export const couterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.number +=1;
        },
        decrement : (state) => {
            state.number -=1;
        },
        incrementByAmount : (state, action) => {
            state.number = state.number + Number(action.payload);
        }
    }
})

export const {increment,decrement ,incrementByAmount } = couterSlice.actions;
export default couterSlice.reducer;