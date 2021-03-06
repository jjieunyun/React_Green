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
import Layout from './page/layout';
import NotFount from './page/notFount';
import MyPage from './page/myPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              {/*๐index : index๋ก ์์ฑํ ๋ด์ฉ์ ์์ ์ฃผ์์ ๋์ผํ ์ฃผ์๋ฅผ ๊ฐ๋๋ค*/}
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/intro' element={<Intro/>} />
              <Route path='/profile/:username' element={<Profile/>} />

              {/*๐์ค์ฒฉ๋ผ์ฐํฐ : outlet์ปดํฌ๋ํธ ํ์*/}
              <Route path='/boardlist' element={<BoardList/>}>
                <Route path=':id' element={<Board/>} />
              </Route>

              {/*๐'*' : ๋ผ์ฐํฐ๋ก ์ฐ๊ฒฐํ path๊ฐ์๋ ๊ทธ ์ด์ธ์ path*/}
              <Route path='*' element={<NotFount/>}/>
              <Route path='/mypage' element={<MyPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
