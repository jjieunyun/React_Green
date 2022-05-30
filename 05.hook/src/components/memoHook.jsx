import React, { useCallback, useMemo, useState } from 'react';
//🍎useMemo, useCallback
//input태그로 숫자값을 입력받으면 ->inputNum
//추가버튼을 눌렀을 때 li태그가 추가됨 -> number배열
//number배열의 합을 h3태그로 출력

const MemoHook = () => {

    const [inputNum, setInputNum] = useState(0);
    const [number, setNumber] = useState([]);

    const onChange = useCallback((event) => {
        setInputNum(event.target.value)
    },[inputNum, number]);

    const addNum = () => {
        setNumber([...number, parseInt(inputNum)])
        setInputNum(0);
    }

    const allSum = (list) => { //useMemo를 쓰지 않아서 useState값이 바뀔때마다 호출
        //내용을 다 더하는 방법 : for문을 사용해서 더하기, reduce(()=>{...})함수사용
        //🌳for in , for of사용
        ///for(let i =0 ; i < list.length; i++ ) {...}
        console.log('실행중')
        return list.reduce((a,b) => a+b)
    }

    //⭐useMemo를 사용할 변수
    const sum = useMemo(()=>{
        allSum(number)
    },[number])

    //⭐useCallback


    return (
        <div>
            <h3>🍎Memo Hook</h3>
            <input 
                type="number" 
                onChange={onChange}
                value={inputNum}
            />
            <button
                onClick={addNum}
            >Add</button>
            {/*메소드의 리턴값을 보여줌 */}
            <p>더한 값 : {sum}</p>
        <ul>
            {number.map((n,index) => {
                return <li key={index}>{n}</li>
            })}
        </ul>
        </div>

    );
};

export default MemoHook;