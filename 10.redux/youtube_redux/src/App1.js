import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
/*
🌳Provider : 어떤 컴포넌트 들에게 제공할 것인가(울타리)
provider로 울타리를 만들어 주면 그 안에 있는 컴포넌트들은 store를 사용할 수있다.

🌳useSelector : store에 저장되어 있는 값을 사용할 때 
store의 값을 사용할 컴포넌트에가서 사용하면된다.
*/


//🍎redux store만들어주기
//⭐각각의 데이터를 불변하게 유지하기 위해 state를 복제해옴(newState)
function reducer(currentState, action) {
  const newState = {...currentState}
  if(currentState === undefined) {
    return {
      number: 1
    }
  }
  if (action.type === 'PLUS'){
    newState.number++;
  }
  
  return newState;
}
const store = createStore(reducer);



function App() {
  
    return (
      <div id="container">
        <h1>Root : {}</h1>
        <div id="grid">
          {/* ⭐store를 반드시 정의해주어야함 */}
          <Provider store={store}>
            <Left1></Left1>
            <Right1></Right1>
          </Provider>
        </div>
      </div>
    );
  }

  function Left1(props) {
    return (
      <div>
        <h1>Left1 </h1>
        <Left2></Left2>
      </div>
    );
  }

  function Left2(props) {
    return (
      <div>
        <h1>Left2 : </h1>
        <Left3></Left3>
      </div>
    );
  }

  // ⭐number의 값을 무선으로 제일 아래에 있는 컴포넌트에 전달
  //useSeletor는 함수를 인자로 받는다
  /* 만들어진 함수는 state를 인자로 받는다*/
  function Left3(props) {
    function func(state){
      return state.number;
    }
    const number = useSelector(func);
    //⭐위의 함수를 간단하게 사용하는 방법
    //const number = useSelector(state => state.number);
    return (
      <div>
        <h1>Left3 : {number} </h1>
      </div>
    );
  }

  function Right1(props) {
    return (
      <div>
        <h1>Right1</h1>
        <Right2></Right2>
      </div>
    );
  }

  function Right2(props) {
    console.log('2')
    return (
      <div>
        <h1>Right2</h1>
        <Right3></Right3>
      </div>
    );
  }

  function Right3(props) {
    console.log('3')
    const dispatch = useDispatch();

    return (
      <div>
        <h1>Right3</h1>
        <input type="button" value="+" onClick={() => {
          dispatch({type : 'PLUS'})
        }}></input>
      </div>
    );

}

export default App;
