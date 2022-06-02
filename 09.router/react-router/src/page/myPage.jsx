import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
    const isLogin = false;

    if(!isLogin) {
        return <Navigate to='/' replace={true}/>
    }
    return (
        <h2>MyPage입니다</h2>
    );
};

export default MyPage;