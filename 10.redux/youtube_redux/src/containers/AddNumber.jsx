import { connect } from 'react-redux';
import AddNumber from '../components/AddNumber';


//🍎Redux의 dispatch를 react의 component의 props로 연결하는 정보를 담고있는 함수로 만들어 넘겨줌
function mapReduxDispatchToReactProps(dispatch) {
    return{
        onClick: (size)=>{
            dispatch({type: 'INCREMENT', size:size})
        }
    }
};



export default connect(null,mapReduxDispatchToReactProps )(AddNumber);


// import React, {Component} from 'react';
// import store from '../sotore'


// export default class extends Component {
//     state = {size:1}
//     render() {
//       return <AddNumber 
//             onClick={(size)=>{
//                 store.dispatch({type: 'INCREMENT', size:size})
//             }}/>
//     }
//   }