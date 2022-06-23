import React, { useState } from 'react';

import loadable from '@loadable/component';

//🍎@loadable/component 라이브러리를 이용해서 가져오는 방법
//가져올때 글자를 호출하고 싶다면 fallback을 이용해서 호출가능
const Splitting = loadable(()=>import('./splitting') ,{ fallback : <div>Loading</div> })

const LoadableComponent = () => {

    const [visible, SetVisible] = useState(false)

    return (
        <div>
            <h1>LoadableComponent를 통해 가져오기</h1>
            <button
            onClick={()=>SetVisible(true)}
            >버튼을 누르면 호출합니다</button>
            {visible && <Splitting/>}
        </div>
    );
};

export default LoadableComponent;