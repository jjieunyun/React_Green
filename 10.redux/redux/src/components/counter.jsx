import React from 'react';

/*
🍎State를 사용하는 방법
1. useState, useReduce를 이용해서 한 컴포넌트에서 사용
2. context API를 이용해서 전역적으로 사용
3. Redux를 이용해서 상태관리 : props를 통해 값을 가져옴
*/

const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h1>{number}</h1>

            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
};

export default Counter;