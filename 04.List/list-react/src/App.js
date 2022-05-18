
import './App.css';
import ListClass from './components/listClass';
import ListFunction from './components/listFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListClass />
        <br/><br/>
        <ListFunction />
      </header>
    </div>
  );
}

export default App;
