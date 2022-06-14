
// const INCREASE = "counter/INCREASE";
// const DECREASE = "coutner/DECREASE";

// // 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// // 초기 상태
// const initalState = {
//   number: 0,
// };

// // 리듀서 함수 ,상태값을 변화시키는 함수
// // 이때 state는 기본값을 넣어서 사용
// function counter(state = initalState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { number: state.number + 1 };
//     case DECREASE:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// }

// export default counter;

import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    number: 0,
  };
//🍎ReducerSlice는 객체를 매게변수로 받는다 (반드시 3개의 value를 가지고 있어야한다)
/*
reducers에 우리가 사용할 모든 타입의 action을 정의해준다(함수로 만들어줌) -> state와 action을 매게변수로 받는다
name ->  reducer를 사용할 이름
initalState
reducers -> 객체로 받는다 (함수)

⭐reducers에서 생략된것들 : return❌ ...state❌ 
*/

const counterSlice = createSlice({
  name :'counter' ,
  initalState,
  reducers: {
    increase(state) {
      state.number +=1;
    },
    decrease(state) {
      state.number -=1;
    }
  }
})

//콘솔에 찍어보기~!!
console.log(counterSlice)


//⭐sotre에 전달해주는것은 reducer이다!!!
export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
