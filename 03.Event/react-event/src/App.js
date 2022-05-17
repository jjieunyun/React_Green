import './App.css';
import EvnetClass from './components/evnetClass';
import InputClass from './components/inputClass';
import InputArrow from './components/inputArrow';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EvnetClass name="Event"></EvnetClass>
        <br/><br/>
        <InputClass />
        <br/><br/>
        <InputArrow />
      </header>
    </div>
  );
}

export default App;
