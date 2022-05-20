
import './App.css';
import ExReducer from './components/exReducer';
import HookComponent from './components/hookComponent';
import ReducerComponent from './components/reducerComponent';
import ReducerComponent2 from './components/reducerComponent2';

function App() {
  return (
    <div className="App">
      <HookComponent/>
      <ReducerComponent/>
      <ReducerComponent2/>
      <ExReducer/>
    </div>
  );
}

export default App;
