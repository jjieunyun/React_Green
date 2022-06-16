//redux에서 자동으로 생성해주는 id
import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns';

//toISOString : local시간으로 정상 변경
const initialState = [
    { 
        id: '1', 
        title : 'Learning Redux Toolkit', 
        content: "I've heard good things.", 
        date : sub(new Date(), { minutes : 10 }).toISOString(),
        reactions : {
            thumbsUp : 0,
            wow: 0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    { 
        id: '2', 
        title: 'Slices...', 
        content: "The more I say slice, the more I want pizza.", 
        date : sub(new Date(), { minutes : 5 }).toISOString(),
        reactions : {
            thumbsUp : 0,
            wow: 0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
]

//⭐state.push()의 사용 : Slice안에서는 ...state가 자동으로 들어가기때문에 그냥 push만 해주어도된다.
//하지만 Slice이외의 다른 곳에서는 원래했던것 처럼 기존의 state를 받아오고 새로운 state를 더해주어야한다.

//⭐prepare와 같은 custom으로 사용가능
const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdded : {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload : {
                        id: nanoid(),
                        title,
                        content,
                        date : new Date().toISOString(),
                        userId,
                        reactions : {
                            thumbsUp : 0,
                            wow: 0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action){
            const{ postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }   
})

//다른컴포넌트에도 posts가 바뀌는걸 알려주어야해서 이렇게 사용한다?? 
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } =postsSlice.actions

//⭐만들어둔 createSlice에서 action함수를 이용해서 자동으로 reducer를만들어주기 때문에 reducer를 내보내주면된다!
export default postsSlice.reducer;