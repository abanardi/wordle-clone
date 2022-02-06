/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
  const [words, setWords] = useState(['', '', '', '', '', '']);
  const [wordNumber, setWordNumber] = useState(0);
  const one = 'qwertyuiop';
  const two = 'asdfghjkl';
  const three = 'zxcvbnm';
  const letters = (one + two + three)
    .split('')
    .map((letter) => ({
      letter: letter,
      used: false,
      inWord: false,
      inPlace: false,
    }));
  console.log(letters);

  useEffect(() => {
    window.addEventListener('keydown', addWord);
    return () => {
      window.removeEventListener('keydown', addWord);
    };
  });

  const addWord = (e) => {
    const letter = e.key;
    const wordsCopy = words.map((ele) => ele);
    let word = words[wordNumber];

    // console.log(letter);

    if (letter === 'Enter') {
      // console.log('Enter hit');
      if (wordNumber >= 6) {
        return;
      } else if (word.length < 5) {
        // console.log('Not long enough');
      } else {
        setWordNumber(wordNumber + 1);
      }
    } else if (letter === 'Backspace') {
      // console.log('Delete');
      let deleted = word.slice(0, word.length - 1);
      wordsCopy[wordNumber] = deleted;
      setWords(wordsCopy);
    } else if (wordNumber >= 6) {
      // console.log('Too many words');
    } else if (letter.match(/^[A-Za-zd]{1,1}$/)) {
      word += letter.toUpperCase();
      if (word.length >= 6) {
        // console.log('Hit enter');
        return;
      }
      wordsCopy[wordNumber] = word;
      setWords(wordsCopy);
    } else {
      // console.log('Does not work!');
    }
  };

  let i = 0;

  return (
    <div className="App">
      <div className="words-panel">
        {words.map((ele) => {
          i += 1;
          return <Word key={'word' + i} letters={ele} />;
        })}
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
