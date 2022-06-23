import React, { Component } from 'react';
//🍎방법1. 클릭했을 때 import해서 가져오는 방법 - class형일때 사용

class ClassComponent extends Component {
    //🌳component를 담아올 state를 만든다
    state = {
        SplittingCompo : null
    }
    handleClick = ()=> {
        //🌳import로 component를 받아옴 ->받아온 component는 promise로 가져오기때문에 then처리
        import('./splitting')
            .then(({default : Splitting})=>{
                this.setState({Splitting})
            })
    }

    render() {
        const { Splitting } = this.state

        return (
            <div>
                <button onClick={this.handleClick}>버튼을 누르세요</button>
                {/* splitting컴포넌트의 값이 있다면 컴포넌트를 출력 */}
                {Splitting && <Splitting/>}
            </div>
        );
    }
}

export default ClassComponent;