import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//만둘어둔 action함수 가져오기
import {increment,decrement ,incrementByAmount } from './counterSlice'


const Counter = () => {
    //counterSlice에 저장된 state 가져오기
    const number = useSelector((state) => state.counter.number)
    const dispatch = useDispatch();

    //input value값
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addAmount = ()=> {
        dispatch(incrementByAmount(incrementAmount))
    }

    return (
        <section>
            <p style={{fontSize : '2rem'}}>{number}</p>
            <input 
                type="text" 
                value={incrementAmount}
                onChange={(e)=> setIncrementAmount(e.target.value)}
            />
            <button
            onClick={()=>addAmount()}
            >Add</button> <br/>

            <button onClick={()=>dispatch(increment())}>+1</button> 
            <button onClick={()=>dispatch(decrement())}>-1</button>
        </section>
    );
};

export default Counter;