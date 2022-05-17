import React, { Component } from 'react';

class InputClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '돼지',
            message : '잠옴'
        }
        this.fnChange = this.fnChange.bind(this)
    }

    fnChange = (event)=> {
        console.log(event)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    fnChangeUser = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    //🌳버튼을 더블클릭했을 떄 message, user의 값을 alert으로 출
    fnShowAlert = () => {
        this.setState({
            user : this.state.user,
            message : this.state.message
        })
        alert(`${this.state.user}님의 Message : ${this.state.message}`)
    }


    render() {
        const { message, user } = this.state
        return (
            <div>
                <h3>🍎2. Input이벤트 연습</h3>
                <p>input태그에 글을 작성하면 <br/> 아래에 동일하게 글자가 출력된다.</p>
                <input type="text"
                    name="user"
                    placeholder='이름을입력하세요'
                    onChange={this.fnChangeUser} />
                <input 
                    type="text" 
                    name="message" 
                    placeholder='메시지를 입력하세요' 
                    //value={message} 
                    onChange={this.fnChange}
                />
                <p>name : {user}</p>
                <p>"{message}"</p> <br/>
                <h3>⭐alert출력 실습문제</h3>
                <p>더블클릭하면 alert창 활성화</p>
                <button onDoubleClick={this.fnShowAlert}>Button</button>
            </div>
        );
    }
}

export default InputClass;