import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions we created
import { 
    increment, 
    decrement,
    reset,
    incrementByAmount } from './counterSlice';

import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    //⭐input값에 들어가는 숫자를 컴포넌트 안에서 저장함
    const [incrementAmount, setIncrementAmount] = useState(0);

    //⭐숫자가 아니라면 0이 더해진다 -> text가 들어가는것을 방지하고자함
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <input
                type='text'
                value={incrementAmount}
                onChange={(e)=> setIncrementAmount(e.target.value)}
            />
            <div>
                <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={()=>dispatch(resetAll())}>Reset</button>
            </div>
        </section>
    );
};

export default Counter;