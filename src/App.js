import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <div className='words-panel'>
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
