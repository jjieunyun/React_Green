import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './page/home';
import About from './page/about';
import Intro from './page/intro';
import Profile from './page/profile';
import BoardList from './page/boardList';
import Board from './page/board';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/intro' element={<Intro/>} />
            <Route path='/profile/:username' element={<Profile/>} />

            {/*🍎중첩라우터 : outlet컴포넌트 필요*/}
            <Route path='/boardlist' element={<BoardList/>}>
              <Route path=':id' element={<Board/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
