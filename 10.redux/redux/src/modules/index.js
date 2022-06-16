// 작성한 리덕스 모듈을 하나로 묶어서 사용
// redux 모듈에서 combineReducers를 가져옴
// redux와 react-redux 두 개 설치후 사용
import { combineReducers } from "redux";
//redux-saga의 effect를 가져옴
import { all } from 'redux-saga/effects'

// 작성한 리덕스 모듈을 가져옴
import counter from "./counter";
import todos from "./todos";
//export default로 export한 경우 {}없이 가져옴, 이름바꿀 수있음
//export로 한경우 : {...}안에서 동일한 이름으로 가져옴
import counterSagaReducer,{ counterSaga } from "./counterSaga";

const rootReducer = combineReducers({
  counter,
  todos,
});

export function* rootSaga() {
  yield all([counterSaga()])
}
export default rootReducer;
