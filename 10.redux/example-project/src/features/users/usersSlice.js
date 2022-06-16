import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id : '0', name : 'Gguggu' },
    { id : '1', name : 'Hodu' },
    { id : '2', name : 'Mong' },
]

const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {

    }
})

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;