import axios from 'axios'

//액션
const GET_NEWS = 'newsApi/GET_NEWS'
const  GET_NEWS_SUCCESS = 'newsApi/GET_NEWS_SUCCESS'
const GET_NEWS_FAILURE = 'newsApi/GET_NEWS_FAILURE'

//thunk 미들웨어를 통해서 실행
//액션함수 axios로 받아오기 위해 비동기로 작성
export const getNews = () => async dispatch => {
    dispatch({type : GET_NEWS});
    try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
        console.log(response.data.articles);
        dispatch({type : GET_NEWS_SUCCESS, payload : response.data.articles})
    } catch (error){
        dispatch({
            type: GET_NEWS_FAILURE,
            payload : error,
            error : true
        }); //에러발생 알림
        throw error; //에러를 다른곳에서 제어할 수있도록 넘겨주기
    }
}

//초기 state 선언
const initialState = {
    loading : {
        GET_NEWS : false
    },
    news : null
}

//reducer함수 작성
const newsApi = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWS : 
            return {...state, loading: {GET_NEWS:true}};
        case GET_NEWS_SUCCESS :
            return {
                ...state, 
                loading: {GET_NEWS:false},
                news : action.payload
            };
        case GET_NEWS_FAILURE : 
            return {
                ...state,
                loading: {GET_NEWS:false}
            };
        default:
            return state;
    }
}

export default newsApi;