import './App.css';
import React  from 'react';
import ExReducer from './components/exReducer';
import HookComponent from './components/hookComponent';
import MemoHook from './components/memoHook';
import ReducerComponent from './components/reducerComponent';
import ReducerComponent2 from './components/reducerComponent2';
import { ThemeContext } from "./components/themContext";

export const Context = React.createContext('light')

function App() {

    <div className="App">
      <Context.Provider value='dark'>
      <ThemeContext.Provider value={"light"}/>
      </Context.Provider>

      <HookComponent/>
      <ReducerComponent/>
      <ReducerComponent2/>
      <ExReducer/>
      <MemoHook/>
    </div>
  
}

export default App;
