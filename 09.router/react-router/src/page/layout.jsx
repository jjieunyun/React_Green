import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigation = useNavigate();

    //๐useNavigate()๋ฅผ ์ด์ฉํด์ ์ํ๋ ์ฃผ์๋ก ์ด๋
    const goBack = () => {
        navigation(-1);
    }

    const goBoard = () => {
        //๐useNavigate์ ๋๋ฒ์งธ ์ธ์์ option์ถ๊ฐ๊ฐ๋ฅ
        // ๋ ๋ฒ์งธ ์ธ์๋ก { replace, state } ์ธ์๋ฅผ ์ฌ์ฉ
        /* replace : ๋ค๋ก๊ฐ๊ธฐํด๋ ๋ฐฉ๊ธํ์ด์ง๋ก ๋์์ค์ง ์๋๋ค ๋ฉ์ธํ์ด์ง'/'๋ก ์ด๋ */
        navigation('/boardlist', {replace:true})
    }

    const goMypage = () => {
        navigation('/mypage');
    }

    return (
        <div>
            <header style={{background: 'lightgrey', padding:16}}>
                <h3>Header</h3>
                <button onClick={goBack}>๋ค๋ก๊ฐ๊ธฐ</button>
                <button onClick={goBoard}>๊ฒ์ํ์ผ๋ก ๊ฐ๊ธฐ</button>
                <button onClick={goMypage}>๋ง์ดํ์ด์ง๋ก ๊ฐ๊ธฐ</button>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer><h3>Footer</h3></footer>
        </div>
    );
};

export default Layout;