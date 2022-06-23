import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import LoadableComponent from './components/LoadableComponent';
import React,{Suspense} from 'react';
import { Route, Routes } from 'react-router';


const Home = React.lazy(()=> import('./page/Home'))
const About = React.lazy(()=> import('./page/About'))

function App() {
  


  return (
    <div className="App">
      <ClassComponent/>
      <hr/>
      <FuncComponent/>
      <hr/>
      <LoadableComponent/>

      <Suspense>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
