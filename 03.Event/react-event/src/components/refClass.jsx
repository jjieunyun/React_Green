import React, { Component } from 'react';

//🍎Ref로 input요소에 접근

class RefClass extends Component {
    constructor(props) {
        super(props);
        //input엘리먼트가 들어갈 공간 (변수)
        this.textInput = null
        //🌳1. ref콜백함수를 통해 DOM접근
        this.setTextInputRef = (element) => {
            this.textInput = element;
        }
        this.focusTextInput = () => {
            //textInput의 focus()사용
            if(this.textInput) this.textInput.focus();
            console.log(this.textInput);
            console.dir(this.textInput);
        }

        //🌳2. React.createRef를 통해 Dom접근하기
        
        this.myRef = React.createRef();
        this.myRefFocus =() => {
            if(this.myRef) this.myRef.current.focus();
        }
    }
    

    render() {
        return (
            <>
                <h3>🍎4. Ref로 DOM에 접근하기</h3>
                <p>1. 콜백함수를 통해 만든 Ref</p>
                <p> 버튼을 누르면 ref로 가져온 input요소 focus</p>
                <input type="text"  
                //ref를 통해서 input엘리먼트 전달
                    ref={this.setTextInputRef}/>
                <button
                    //버튼을 누르면 textInput으로 focus
                    onClick={this.focusTextInput}
                >콜백함수로 만든 버튼
                </button>
                
                <p>2. createRef함수를 통해 만든 Ref</p>
                <p>버튼을 누르면 ref로 가져온 input요소 focus</p>
                <input type="text"
                    //createRef를 통해서 input엘리먼트 전달
                    ref={this.myRef} />
                <button
                    onClick={this.myRefFocus}
                >createRef로 만든 버튼
                </button>
            </>
        );
    }
}

export default RefClass;