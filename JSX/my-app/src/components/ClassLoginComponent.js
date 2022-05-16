//🍎컴포넌트 실습
import {Component} from 'react';

class ClassLoginComponent extends Component {
    render() {
        //클래스에서 props값을 가져올때는 this.props를 통해서 가져온다.
        const {login, name} = this.props;
        return (
        <div>
            <h3>🌳Class로 만든 컴포넌트</h3>
            {
                login? (
                    <div>
                        <h4>로그인에 성공하였습니다.</h4>
                        <p>Hi, {name}🐩</p>
                    </div>
                ) : (
                    <div>
                        <h1>로그인이 필요합니다.</h1>
                        <p>😂</p>
                    </div>
                )
            }
        </div>
        )
    }
}

ClassLoginComponent.defaultProps = {
    name : 'GGU GGU'
}

export default ClassLoginComponent;