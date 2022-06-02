import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
//🍎NavLink : 라우터의 경로가 일치하는 경우 특정 스타일또는 클래스 적용

const BoardList = () => {
    const numList = [1,2,3,4,5];

    const activeStyle = {
        color : 'green',
        fontWeight : 'bold',
    }

    return (
        <div>
            
            <h1>Board</h1>  
            <ul>
                {
                    numList.map((num,index)=>(
                        <li key={index}>
                            <NavLink 
                                to={`/boardlist/${num}`}
                                style={({isActive}) => (isActive? activeStyle : undefined)}
                                >게시글{num}
                            </NavLink>
                        </li>
                    ))
                }
                
            </ul>
            {/*<Outlet/>을 통해서 중첩된 컴포넌트의 화면이 출력*/}
            <Outlet/>
        </div>
    );
};

export default BoardList;