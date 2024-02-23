import logo from './logo.svg';
import './App.css';
import MidCard from './MidCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <MidCard/>
      </header>
    </div>
  );
}

export default App;
