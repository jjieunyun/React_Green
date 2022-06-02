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
              {/*🍎index : index로 작성한 내용은 상위 주소와 동일한 주소를 갖는다*/}
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/intro' element={<Intro/>} />
              <Route path='/profile/:username' element={<Profile/>} />

              {/*🍎중첩라우터 : outlet컴포넌트 필요*/}
              <Route path='/boardlist' element={<BoardList/>}>
                <Route path=':id' element={<Board/>} />
              </Route>

              {/*🍎'*' : 라우터로 연결한 path가아닌 그 이외의 path*/}
              <Route path='*' element={<NotFount/>}/>
              <Route path='/mypage' element={<MyPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
