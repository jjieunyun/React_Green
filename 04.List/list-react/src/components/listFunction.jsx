//🍎Arrow function으로 list출력
import React, {  useState } from 'react';


const ListFunction = () => {
    //🌳useState를 통해 data를 저장한다.
    const [season, setSeason] = useState([
        {id : 1, text: '봄'},
        {id : 2, text: '여름'},
        {id : 3, text: '가을'},
        {id : 4, text: '겨울'}
    ]);

    //id값을 인자값으로 받아와서 id를 제외한 값을 return하는 함수
    //id를 삭제하는 것과 동일
    const deleteSeason = (id) => {
        const nextSeason = season.filter(item => {
            return item.id !== id
        })
        setSeason(nextSeason)
    };

    return (
        <div>
            <h3>🍎function컴포넌트에서 list출력</h3>
            <ul>
                {season.map(item => (
                    <li 
                        key={item.id}
                        //🌳함수의 값을 전달하기 위해서는 익망함수로 감싸서 return 
                        onClick={()=> deleteSeason(item.id)}
                    >{item.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListFunction;

