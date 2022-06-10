import DisplayNumber from '../components/DisplayNumber';
import { connect } from "react-redux";

/*
🍎connect()() : connect 함수를 통해서 return된 함수를 다시 실행하는 형태  -> 어렵다 걍 넘어가
⭐DisplayNumber를 싸고있는 컴포넌트를 export!!
DisplayNumber를 connect라는 함수의 두번째괄호에 전달한다.
⭐connect함수는 첫번째 괄호에(mapStateToProps, mapDispatchToProps)가 온다~!!!

*/
//⭐mapReduxStateToReactProps : redux에서 state의 값이 변경될때마다 실행됨(state를 인자로 받는다)
function mapReduxStateToReactProps(state){
    return {
        number: state.number
    }
};

// function mapReduxDispatchToReactProps() {
//     return;
// };


export default connect(mapReduxStateToReactProps)(DisplayNumber);


// import React, { Component } from 'react';
// import store from '../sotore'

// export default class extends Component{
//     state = {number : store.getState().number}
//     constructor(props) {
//         super(props);
//         store.subscribe(()=>{
//             return this.setState({number:store.getState().number})
//         })
        
//     }

//     render() {
//         return <DisplayNumber number={this.state.number}/>
//     }
// };

