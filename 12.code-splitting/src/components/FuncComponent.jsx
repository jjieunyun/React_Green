import React, { useState } from 'react';
import { Suspense } from 'react';

//๐๋ฐฉ๋ฒ2 : React.lazy๋ฅผ ์ฌ์ฉํ์ฌ ํ๋ฉด์ ์ถ๋ ฅ
/*
Suspense ํ๊ทธ๋ก ๊ฐ์ธ์ ์ฌ์ฉ
*/
const Splitting = React.lazy(()=> import('./splitting'))

const FuncComponent = () => {
    const [visibla, SetVisible] = useState(false)

    const onClick=()=>{
        SetVisible(true)
    }

    return (
        <div>
            <h1>ํจ์ํ์์ ์ปดํฌ๋ํธ ํธ์ถ</h1>
            <button
            onClick={onClick}
            >๋ฒํผ์ ๋๋ฅด๋ฉด ํธ์ถํฉ๋๋ค.</button>
            <Suspense>
                {visibla && <Splitting/>}
            </Suspense>
        </div>
    );
};

export default FuncComponent;