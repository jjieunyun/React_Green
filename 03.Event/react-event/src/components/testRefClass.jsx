import React, { Component } from 'react';

/*🍎실습 : TestRefClass에서 ref콜백과 createRef를 사용해서 클릭했을 때
input sytle의 backgroundColor값을 red로 바꾸기

*/
class TestRefClass extends Component {
    constructor(props){
        super(props);

        //1. 콜백함수 만들기
        this.myInput = null;
        this.myInputRef = (element) => {
            this.myInput = element;
        };
    
        this.changeMyInput = () => {
            console.log(this.myInput)
            console.dir(this.myInputRef)
            if (this.myInput) this.myInput.style.backgroundColor = "red";
        }

        //2. createRef이용하기
        this.colorInput = React.createRef();
        this.changeColorInput = () => {
            if(this.colorInput) this.colorInput.current.style.backgroundColor = "blue";
        }
    }
    
    render() {
        
        return (
            <>
                <h3>🌳Ref사용 실습문제</h3>
                {/*콜백함수*/}
                <p>클릭했을 때 backgroundColor값을 red로 바꾸기</p>
                <input type="text" 
                    ref={this.myInputRef}
                />
                <button 
                    onClick={this.changeMyInput}
                >색을 바꿉니다(Red)</button> <br></br>

                {/*CreateRef함수*/}
                <input type="text" 
                    ref={this.colorInput}
                />
                <button 
                    onClick={this.changeColorInput}
                >색을 바꿉니다(Blue)</button>
            </>
        );
    }
}

export default TestRefClass;