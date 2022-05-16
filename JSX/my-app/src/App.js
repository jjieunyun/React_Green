import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Mycomponent'
import ArrowComponent from './components/ArrowComponent';
import LoginComponent from './components/LoginComponent';
import ClassLoginComponent from './components/ClassLoginComponent';
import StateComponent from './components/StateComponent'

//🍎함수형 컴포넌트

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>내용을 수정했습니다.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>🌳State Component에서 출력되는 state</h3>
        <StateComponent></StateComponent>
      </header>
      <MyComponent></MyComponent>
      <ArrowComponent name="3">태그 사이로 전달되는 props</ArrowComponent>
      {/*props의 속성 이름을 통해서 값을 전달(문자열)
        다른 자료형을 사용하려면 {}을 이용해서 자바스크립트로 넣어준다.*/}
      <LoginComponent login="true" /> 
      <ClassLoginComponent login={true} />
      
    </div>
  );
}

export default App;
