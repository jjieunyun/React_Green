import React, { useState } from 'react';
import { Suspense } from 'react';

//🍎방법2 : React.lazy를 사용하여 화면에 출력
/*
Suspense 태그로 감싸서 사용
*/
const Splitting = React.lazy(()=> import('./splitting'))

const FuncComponent = () => {
    const [visibla, SetVisible] = useState(false)

    const onClick=()=>{
        SetVisible(true)
    }

    return (
        <div>
            <h1>함수형에서 컴포넌트 호출</h1>
            <button
            onClick={onClick}
            >버튼을 누르면 호출합니다.</button>
            <Suspense>
                {visibla && <Splitting/>}
            </Suspense>
        </div>
    );
};

export default FuncComponent;