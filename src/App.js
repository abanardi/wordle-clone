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

  const [letters, setLetters] = useState(
    (one + two + three).split('').map((letter) => ({
      letter: letter,
      used: false,
      inWord: false,
      inPlace: false,
    }))
  );

  let emptyWordList = [];

  for (let i = 0; i < 5; i++) {
    emptyWordList.push(' ');
  }
  console.log(emptyWordList);

  let emptyWordListObj = emptyWordList.map((ele) => ({
    letter: ele,
    submitted: false,
    inWord: false,
    inPlace: false,
  }));

  console.log(emptyWordListObj);
  let emptyWords = [];

  for (let i = 0; i < 5; i++) {
    emptyWords.push(emptyWordListObj);
  }
  console.log(emptyWords);

  const [wordLetters, setWordLetters] = useState([]);

  const wordLetter = {
    letter: ' ',
    submitted: false,
    inWord: false,
    inPlace: false,
  };

  const letterMap = new Map(); // Used to find index of letter when changing
  const allLetters = (one + two + three).split('');
  for (let i = 0; i < allLetters.length; i++) {
    letterMap.set(allLetters[i], i);
  }

  const changeLetterCondition = (letter) => {
    // Changes the color of the letter on keyboard depending on its status
    const lettersdummy = letters;
    lettersdummy[letterMap.get(letter)].used = true;
    setLetters(lettersdummy);
  };

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

    if (letter === 'Enter') {
      // What happens when you hit enter key to submit word
      if (wordNumber >= 6) {
        return;
      } else if (word.length < 5) {
      } else {
        // Updates word that you're on and also highlights the letter on the keyboard
        changeLetterCondition('y');
        setWordNumber(wordNumber + 1);
      }
    } else if (letter === 'Backspace') {
      let deleted = word.slice(0, word.length - 1);
      wordsCopy[wordNumber] = deleted;
      setWords(wordsCopy);
    } else if (wordNumber >= 6) {
    } else if (letter.match(/^[A-Za-zd]{1,1}$/)) {
      // Matches an alphabetical character
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
          return <Word key={'word' + i} letters={ele} displayWord={false} />;
        })}
      </div>
      <Keyboard letters={letters} />
    </div>
  );
}

export default App;
