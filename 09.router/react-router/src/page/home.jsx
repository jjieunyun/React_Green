import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <h1>Home Component</h1>
            <p>홈화면입니다</p>
            <Link to='/about'>About</Link>  |  {" "}
            <Link to='/intro'>Intro</Link>  |  {" "}
            <Link to='/profile/kim'>profile</Link>  |  {" "}
            <Link to='/boardlist'>Board</Link>
        </div>
    );
};

export default Home;