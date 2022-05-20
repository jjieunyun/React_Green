import React, { useReducer } from 'react';

/*⭐Reducer를 이용해서 {name:""}을 만들고 
action.type -> 'reset' : name의 값 홍길동
'write' : name 의 값 pay load로 받아온 값
*/

function reducer (state,action) {
    if(action.type === 'reset') {
        return { name : '꾸꾸' }
        
    } else {
        return {
            [action.name] : action.value
            //똑같음 : {name : action.payload}
        }
    }
    
} 

const ExReducer = () => {
    const  [state, dispatch] = useReducer(reducer, {name : ''})

    const changeName = (event)=> { dispatch(event.target) }

    return (
        <div>
            <h3>🍎Reducer Hook실습</h3>
            <p>name : {state.name}</p>
            <button 
                onClick={()=>{dispatch({type : 'reset'})}}
            >Reset</button>
            <input type="text" name="name" onChange={changeName}/>
        </div>
    );
};

export default ExReducer;