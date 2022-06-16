import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'


const INCREASE = "counter/INCREASE";
const DECREASE = "coutner/DECREASE";
const SETDIFF = "counter/SETDIFF";
const DIFF = "counter/DIFF";
//비동기를 위한 액션이름 추가
const INCREASE_ASYNC = 'counter/ INCREASE_ASYNC'
const DECREASE_ASYNC = 'counter/ DECREASE_ASYNC'


// 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SETDIFF, payload: diff });
export const onDiff = () => ({ type: DIFF });

//비동기 액션함수
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync= () => ({ type: DECREASE_ASYNC });

//제너레이터함수
function* increaseSaga() {
  yield delay(1000); //1초기다림
  yield put(increase()) //put은 action을 dispatch해준다.
}
function* decreaseSaga() {
  yield delay(1000); //1초기다림
  yield put(decrease()) //put은 action을 dispatch해준다.
}

//takeEvery모든 내용 실행 , takeLatest마지막꺼만 실행
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga)
  yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initalState = {
  number: 0,
  diff: 0,
};

// 리듀서 함수 ,상태값을 변화시키는 함수
function counterSagaReducer(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    case SETDIFF:
      return {
        ...state,
        diff: parseInt(action.payload),
      };
    case DIFF:
      return {
        ...state,
        number: state.number + state.diff,
      };
    default:
      return state;
  }
}

// export default counter;
export default counterSagaReducer;

