import { useState } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
const [words, setWords] = useState(['','','','','','']);
const [wordNumber, setWordNumber] = useState(0);
//  

  return (
    <div className="App">
      <div className='words-panel'>
      {words.map( (ele) => (<Word letters={ele} />))}
      {/* <Word letters='PLANE'/>
      <Word />
      <Word />
      <Word />
      <Word />
      <Word /> */}
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
