import React, { useReducer } from 'react';

function reducer(state, action) {
    //이전 State의 값을 스프레드 연산자로 안의 내용을 꺼내온 후
    //action.name과 action.value를 통해 새로운 속성값을 작성한다
    return {
        ...state,
        [action.name] : action.value
    }
}

const ReducerComponent2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : 'ff',
        nickName: 'dd'
    })

    const onChange = (event) => { dispatch(event.target)}

    return (
        <div>
            <h3>🍎Reducer Hook (2)</h3>
            <input type="text" name="name" onChange={onChange} />
            <input type="text" name="nickName" onChange={onChange} />
            <p>{state.name}</p>
            <p>{state.nickName}</p>
        </div>
    );
};

export default ReducerComponent2;