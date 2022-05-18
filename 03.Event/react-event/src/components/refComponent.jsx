//🍎컴포넌트에서 ref사용하기
//testRefClass컴포넌트를 가져와서 현재 컴포넌트에서 제어
import React, { Component } from 'react';
import TestRefClass from './testRefClass';


class RefComponent extends Component {
    componentRef = null;
    changeAll = () => {
        console.log(this.componentRef)
        //🌳가져온 ref값 확인 
        this.componentRef.changeColorInput();
        this.componentRef.changeMyInput();
    }

    render() {
        return (
            <div>
                <TestRefClass
                    //🌳ref를 사용해서 엘리먼트 확인
                ref={(element)=> {this.componentRef = element}}
                />
                <button
                onClick={this.changeAll}
                >
                ChangeAll
                </button>
            </div>
        );
    }
}

export default RefComponent;