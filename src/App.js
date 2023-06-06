import './App.css';
import { Radar } from './components/radar';

function App() {
  return (
    <div className="App">
      <p>Axis Label Tutorial</p>
      <div style={{ width: '100%', height: '100%'}}>
        <Radar/>
      </div>
    </div>
    
  );
}

export default App;
