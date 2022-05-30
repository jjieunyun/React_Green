import './App.css';
import {Button} from 'react-bootstrap'
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Test/>
    </div>
  );
}

export default App;
