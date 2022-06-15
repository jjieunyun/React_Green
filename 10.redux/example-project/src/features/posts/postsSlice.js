//redux에서 자동으로 생성해주는 id
import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = [
    { id: '1', title : 'Learning Redux Toolkit', content: "I've heard good things.", },
    { id: '2', title: 'Slices...', content: "The more I say slice, the more I want pizza.", },
]

//⭐state.push()의 사용 : Slice안에서는 ...state가 자동으로 들어가기때문에 그냥 push만 해주어도된다.
//하지만 Slice이외의 다른 곳에서는 원래했던것 처럼 기존의 state를 받아오고 새로운 state를 더해주어야한다.

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded : {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload : {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }   
})

//다른컴포넌트에도 posts가 바뀌는걸 알려주어야해서 이렇게 사용한다?? 
export const selectAllPosts = (state) => state.posts;

export const { postAdded } =postsSlice.actions

export default postsSlice.reducer;