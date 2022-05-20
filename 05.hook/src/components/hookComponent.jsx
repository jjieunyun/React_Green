import React, { useEffect, useState } from 'react';

//⭐useState는 Statehook으로 사용한다. 여러개 작성가능

const HookComponent = () => {
    const [count, setCount] = useState(0);
    const [userName] = useState('호두')
    const [time, setTime] = useState(new Date())
    
    //🌳userEffect : lifeCycle과 동일한 기능을 한다
    useEffect(() => {
        document.title = userName;
    })
    //두번째 인자는 []안에 업데이트할 변수 이름을 작성해 준다.
    //❓두번째 인자가 작성되지 않았을 때? : 업데이트와 마운트가 함께 실행된다.
    //⭐화면에 시간 출력 -> useEffect
    //클래스형에서 작성한 시간 출력내용을 useEffect로 바꿔서 출력
    const tick = () => {
        setTime(new Date())
    }

    useEffect(() => {
        setInterval(() => tick(), 1000);
    })


    return (
        <div>
            <h3>🍎StateHook</h3>
            <p>{userName}</p>
            <p>{count}</p>
            <button
                onClick={()=>{setCount(count +1)}}>
                +1
            </button>

            <h3>🍎시간 출력</h3>
                <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default HookComponent;