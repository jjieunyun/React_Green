import axios from "axios"
import { put, takeLatest } from "redux-saga/effects"

//액션타입
const GET_NEWS = 'newsApiSaga/GET_NEWS'
const GET_NEWS_SUCCESS = 'newsApiSaga/GET_NEWS_SUCCESS'
const GET_NEWS_FAILURE = 'newsApiSaga/GET_NEWS_FAILURE'

//액션함수
export const getNews = () => ({type : GET_NEWS})

//제너럴 함수 (사가에서 실행될 함수)
function* getNewsSaga = () => {
    //로딩시작
    yield put({type : GET_NEWS})
    //try catch를 통해서 axios에서 값을 가져옴
    try{
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
        console.log(response.data.articles);
        yield put({
            type : GET_NEWS_SUCCESS,
            payload : response.data.articles
        })
    }catch(e){
        yield put({
            type: GET_NEWS_FAILURE,
            payload: e,
        })
    }

}

export function* newsApiSaga() {
    yield takeLatest(GET_NEWS_START, getNewsSaga)
}

//초기값

//리듀서 값