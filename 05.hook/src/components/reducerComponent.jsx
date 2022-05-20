import React, { useReducer } from 'react';

//reducer함수를 만들어서 useRedecer에서 사용
function reducer(state,action) {
    //action.type에 따라서 실행될 내용 분류
    switch(action.type) {
        //return을 이용해서 case의 실행내용 종료 및 값 수정
        case 'increment' :
            return { count : state.count+1 };
        case 'decrement' :
            return { count : state.count-1 };
        case 'reset' :
            return action.payload

        default : 
            throw new Error();
    }
}

// function init(initialCount) {
//     return {count : initialCount}
// }

//⭐초기화값은 initState안에다가 바로 작성해줄수있다.
const initState = { count : 0 }



//🍎ReducerComponent!!
const ReducerComponent = () => {
    //useState와 동일하게 [값,함수]반환값을 받아옴
    //useReducer의 인수로는 함수와 값(객체)를 가져옴
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h3>🍎Reducer Hook</h3>
            {/**initState값이 객체이므로 객체의 속성에 접근해서 사용 */}
            <p>count : {state.count}</p>
            {/**dispatch를 사용해 줄때 사용할 action.type을 객체형식으로 사용 */}
            <button onClick={()=>{dispatch({type:'decrement'})}}
            >- Button</button>
            <button onClick={()=>{dispatch({type:'increment'})}}
            >+ Button</button>
            <button onClick={()=>{dispatch({type:'reset', payload : initState})}}
            >Reset Button</button>
        </div>
    );
};

export default ReducerComponent;