import './App.css';
import EvnetClass from './components/evnetClass';
import InputClass from './components/inputClass';
import InputArrow from './components/inputArrow';
import RefClass from './components/refClass';
import TestRefClass from './components/testRefClass';
import RefComponent from './components/refComponent';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <EvnetClass></EvnetClass>
        <br/><br/>
        <InputClass />
        <br/><br/>
        <InputArrow />
        <br/><br/>
        <RefClass></RefClass>
        <br/><br/>
        <TestRefClass></TestRefClass>
        <br/><br/>
        <RefComponent></RefComponent>
      </header>
    </div>
  );
}

export default App;
