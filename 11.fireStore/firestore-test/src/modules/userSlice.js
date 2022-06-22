import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState  = []


const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        getUserData : (state, action) => {
            
        },
        getSuccess(state, action) {

        },
        getFailure(state, action) {

        },
    }
})

export const { getUserData, getSuccess,getFailure  } =userSlice.actions
export default userSlice.reducer;