import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Mycomponent'
import ArrowComponent from './components/ArrowComponent';
import LoginComponent from './components/LoginComponent';
import ClassLoginComponent from './components/ClassLoginComponent';
import StateComponent from './components/StateComponent'
import ArrowState  from './components/ArrowState';

//๐ํจ์ํ ์ปดํฌ๋ํธ

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>๋ด์ฉ์ ์์ ํ์ต๋๋ค.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>๐ณState Component์์ ์ถ๋ ฅ๋๋ state</h3>
        <StateComponent></StateComponent>

        <h3>๐ณArrow State์์ ๋ง๋ค์ด์ง ๋ฒํผ</h3>
        <ArrowState></ArrowState>
      </header>
      <MyComponent></MyComponent>
      <ArrowComponent name="3">ํ๊ทธ ์ฌ์ด๋ก ์ ๋ฌ๋๋ props</ArrowComponent>
      {/*props์ ์์ฑ ์ด๋ฆ์ ํตํด์ ๊ฐ์ ์ ๋ฌ(๋ฌธ์์ด)
        ๋ค๋ฅธ ์๋ฃํ์ ์ฌ์ฉํ๋ ค๋ฉด {}์ ์ด์ฉํด์ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋ฃ์ด์ค๋ค.*/}
      <LoginComponent login="true" /> 
      <ClassLoginComponent login={true} />
    </div>
  );
}

export default App;
