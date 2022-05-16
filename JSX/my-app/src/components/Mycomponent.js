//🍎클래스형 컴포넌트

import {Component} from 'react';

class MyComponent extends Component {
    //🌳클래스형 컴포넌트에서는 함수 대신에 render를 통해서 내보낸다.
    render() {
        const name = 'react';
        return (
            <div>
                <h1>🌟{name}! 첫 컴포넌트 입니다🌟</h1>
            </div>
        )
    }
}


export default MyComponent;
