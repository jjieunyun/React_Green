//🍎클래스형 컴포넌트 
import React, { Component } from 'react';

//🌳리액트에서 component를 상속받아서 사용
class EvnetClass extends Component {
    //props의 값은 부모컴포넌트에서 받아오는 값이므로 component에서 할당된다.
    constructor(props) {
        //받아온 값을 super로 전달, 사용할 때는 this로 사용
        super(props);
        //클래스형 컴포넌트에서 사용하기 위해 constructor에 저장
        this.state = {
            message : '기존 메시지 입니다'
        };
        //클래스 안에서 사용하기위해 this.onClickEvent함수 이름 작성
        //작성한 함수는 constructor 바깥에 작성되어서 연결하기 위해 아래와 같이 작성한다.
        //this.changeMsg 밖에서 작성한 이름으로 연결 -> this.changeMsg의 this위치를 알려주기 위해 bind사용
        //⭐ ArrowFuntion에서는 따로 bind를 사용해 주지 않아도 함수가 알아서 실행된다,
            //화살표 함수가 사용된 곳의 this를 찾는다.
        this.changeMsg = this.changeMsg.bind(this);
        this.onChangeMsg = this.onChangeMsg.bind(this);
    }

    //🌳사용할 함수의 내용 : 어떠한 함수이든 상관없음
    changeMsg = ()=>{
        this.setState({
            message : '메시지가 바뀌었습니다.'
        })
    }

    //🌳onChangeMsg라는 함수를 만들고 onClick을 이용해서 연결
    onChangeMsg = ()=>{
        this.setState({
            message : '메시지입니다.'
        })
    }

    render() {
        const {name} = this.props;
        const {message} = this.state;
        
        return (
            <div>
                <h3>🍎1. {name}연습</h3>
                <h3>"{message}"</h3>
                <button onClick={this.changeMsg} //this를 통해서 메서드를 들고온다
                >Button1</button> <br/>
                <button onClick={this.onChangeMsg}>Button2</button>
            </div>
        );
    }
}

export default EvnetClass;