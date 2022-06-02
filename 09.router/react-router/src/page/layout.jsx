import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigation = useNavigate();

    //🍎useNavigate()를 이용해서 원하는 주소로 이동
    const goBack = () => {
        navigation(-1);
    }

    const goBoard = () => {
        //🍎useNavigate의 두번째 인자에 option추가가능
        // 두 번째 인자로 { replace, state } 인수를 사용
        /* replace : 뒤로가기해도 방금페이지로 돌아오지 않는다 메인페이지'/'로 이동 */
        navigation('/boardlist', {replace:true})
    }

    const goMypage = () => {
        navigation('/mypage');
    }

    return (
        <div>
            <header style={{background: 'lightgrey', padding:16}}>
                <h3>Header</h3>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goBoard}>게시판으로 가기</button>
                <button onClick={goMypage}>마이페이지로 가기</button>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer><h3>Footer</h3></footer>
        </div>
    );
};

export default Layout;