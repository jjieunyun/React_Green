import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';


//쿼리스트링 ?로시작하고 key=value로 사용하는 값
const Intro = () => {
    const location = useLocation();
    //🍎useSearchParams()는 6버전부터 추가
    const [searchParams] = useSearchParams()
    //useSearchParams()의 get('key')는 key의 value를 가져온다
    const num = searchParams.get('num');
    const value = searchParams.get('username');


    console.log(location)
    return (
        <div>
            <h1>Intro component</h1>
            <p>쿼리스트링 : {location.search}</p>
            <p>useSearchParams : {num}</p>
            <p>useSearchParams : {value}</p>
            {/*주소로 intro?username=green이 들어왔을 때, 
            아래에 환영합니다가 출력되고 그 외에는 출력되지 않게 작성*/}

            {/*⭐JSX연산자
                if문을 간단하게 쓰기 위해서 '? :'와같은 삼항 연산자나 && ||연산자 사용
                $$ : ?대신에 &&연산자를 사용하면 참일 때 뒤에 작성한 태그를 출력한다. 
                // : ? 대신에 || 연산자를 사용하면 거짓(값이없을때)일때 출력함
                
            */}
            {value === 'green'?<p>환영합니다</p> : <p>존재하지 않는 User입니다.</p>}
        </div>
    );
};

export default Intro;