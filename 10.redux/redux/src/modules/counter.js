//리덕스 사용을 위한 초기 상태와 reducer함수 만들기

//action; action name = 'module name /  action name'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션함수 : 액션에 들어갈 값이 바뀔때 쉽게 사용하기 위함
export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});

//초기상태
const initialState = {
    number : 0
};

//리듀서함수 , 상태값을 변화시키는 함수 (state는 기본값)
function counter(state=initialState, action) {
    switch (action.type) {
        case INCREASE : 
            return { number : state.number +1 }
        case DECREASE : 
            return { number : state.number -1 }
        default:
            return state;
    }
}

export default counter;