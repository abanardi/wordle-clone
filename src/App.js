/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
  const [words, setWords] = useState(['', '', '', '', '', '']);
  const [wordNumber, setWordNumber] = useState(0);

  // Alphabet used for keyboard
  const one = 'qwertyuiop';
  const two = 'asdfghjkl';
  const three = 'zxcvbnm';
  const letters = (one + two + three).split('').map((letter) => ({
    letter: letter,
    used: false,
    inWord: false,
    inPlace: false,
  }));
  // console.log(letters);

  useEffect(() => {
    // Allows program to detect keyboard input for letters (only alphabetical characters)
    window.addEventListener('keydown', addWord);
    return () => {
      window.removeEventListener('keydown', addWord);
    };
  });

  const addWord = (e) => {
    // Adds a letter to the current word we're working on
    const letter = e.key;
    const wordsCopy = words.map((ele) => ele); // Dummy array that we're going to modify
    let word = words[wordNumber];

    if (letter === 'Enter') { // What happens when you hit enter key to submit word
      if (wordNumber >= 6) {
        return;
      } else if (word.length < 5) {
      } else {
        setWordNumber(wordNumber + 1);
      }
    } else if (letter === 'Backspace') {
      let deleted = word.slice(0, word.length - 1);
      wordsCopy[wordNumber] = deleted;
      setWords(wordsCopy);
    } else if (wordNumber >= 6) {
    } else if (letter.match(/^[A-Za-zd]{1,1}$/)) { // Matches an alphabetical character
      word += letter.toUpperCase();
      if (word.length >= 6) {
        return;
      }

      // Sets word equal to the previous word + a letter
      // Updates list to dummy list
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
      <Keyboard letters={letters}/>
    </div>
  );
}

export default App;
