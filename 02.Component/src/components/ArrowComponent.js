//🍎화살표함수로 만드는 컴포넌트
//모듈로 내보내기 위해 ArrowComponent에 담아서 내보낸다

import { PropTypes } from 'prop-types'
import '../css/ArrowComponent.css'

const ArrowComponent = (props)=> {
    //🌳비구조화 할당 문법 : 앞에 props를 생략하고도 사용해줄수있다.
    const { children,name } = props
    return <div className="ArrowComponent">
            <h2>👉화살표 함수로 만든 컴포넌트 입니다.👈</h2>
            {/* props.children을 통해서 vue의 슬롯과 같은 형태로 사용할 수있다. */}
            {/*비구조화 문법을 넣지 않으면 props를 앞에 붙여줘야함! */}
            <p>{children}</p>
            <p>{name}</p>
        </div>;
};
//🌳App.js에서 값을 정해주지 않으면 아래 값으로 들어가서 출력된다.
ArrowComponent.defaultProps = {
    name : "기본이름",
};

ArrowComponent.propTypes = {
    name : PropTypes.string
};

export default ArrowComponent