import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
//๐NavLink : ๋ผ์ฐํฐ์ ๊ฒฝ๋ก๊ฐ ์ผ์นํ๋ ๊ฒฝ์ฐ ํน์  ์คํ์ผ๋๋ ํด๋์ค ์ ์ฉ

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
                                >๊ฒ์๊ธ{num}
                            </NavLink>
                        </li>
                    ))
                }
                
            </ul>
            {/*<Outlet/>์ ํตํด์ ์ค์ฒฉ๋ ์ปดํฌ๋ํธ์ ํ๋ฉด์ด ์ถ๋ ฅ*/}
            <Outlet/>
        </div>
    );
};

export default BoardList;