/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
  const [words, setWords] = useState(['', '', '', '', '', '']);
  const [wordNumber, setWordNumber] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', (ele) => {
      if (ele.key.match(/^[A-Za-zd]{1,1}$/)) {
        console.log(ele.key);
      }
      const wordsCopy = words;
      wordsCopy[3] += ele.key;
      // console.log(wordsCopy);
      console.log(words);
      setWords(wordsCopy);
    });
  }, [words]);

  return (
    <div className="App">
      <div className="words-panel">
        {words.map((ele) => (
          <Word letters={ele} />
        ))}
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
