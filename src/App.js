/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';
import { allWordsList } from './AllWords';

function App() {
  const [wordNumber, setWordNumber] = useState(0);
  const [correctWord, setCorrectWord] = useState(allWordsList[Math.floor(Math.random()*allWordsList.length)]);
  const [letterIndex, setLetterIndex] = useState(0);
  let correctLettersNum = 0;
  console.log(correctWord);
  const correctWordMap = new Map();

  for (let i = 0; i < correctWord.length; i++) {
    if (correctWordMap.has(correctWord[i])) {
      correctWordMap.set(
        correctWord[i],
        correctWordMap.get(correctWord[i]) + 1
      );
    } else {
      correctWordMap.set(correctWord[i], 1);
    }
  }


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

  let emptyWordListObj = emptyWordList.map((ele) => ({
    letter: ele,
    submitted: false,
    inWord: false,
    inPlace: false,
  }));

  let emptyWords = [];

  for (let i = 0; i < 6; i++) {
    emptyWords.push(emptyWordListObj.map((ele) => ele));
  }

  const [wordLetters, setWordLetters] = useState(emptyWords);
  // console.table(wordLetters[wordNumber]);

  const letterMap = new Map(); // Used to find index of letter when changing
  const allLetters = (one + two + three).split('');
  for (let i = 0; i < allLetters.length; i++) {
    letterMap.set(allLetters[i], i);
  }

  const changeLetterCondition = (wordLetters, index) => {
    // Changes the color of the letter on keyboard and word depending on its status

    const lettersdummy = letters;
    const letterObj = wordLetters[wordNumber][index];
    const letter = wordLetters[wordNumber][index].letter.toLowerCase();

    // Always sets the letter to used or submitted
    lettersdummy[letterMap.get(letter)].used = true;
    letterObj.submitted = true;
    let numberOfLetters = correctWordMap.get(letter);

    // If the letter is in the word
    if (correctWord.split('').includes(letter)) {
      if (correctWordMap.get(letter) === 0) {
        letterObj.inWord = false;
      } else if (correctWordMap.get(letter) === 1) {

        const remaining = wordLetters[wordNumber].slice(
          index + 1,
          wordLetters[wordNumber].length
        );
        const indexLetter =
          remaining.map((ele) => ele.letter).indexOf(letter.toUpperCase()) +
          index +
          1;

        if (indexLetter !== -1) {
          if (correctWord.split('')[indexLetter] === letter) {
            letterObj.inWord = false;
          } else {
            lettersdummy[letterMap.get(letter)].inWord = true;
            letterObj.inWord = true;
            correctWordMap.set(letter, numberOfLetters - 1);
          }
        } else {
          lettersdummy[letterMap.get(letter)].inWord = true;
          letterObj.inWord = true;
          correctWordMap.set(letter, numberOfLetters - 1);
        }
      } else {
        lettersdummy[letterMap.get(letter)].inWord = true;
        letterObj.inWord = true;
        correctWordMap.set(letter, numberOfLetters - 1);
      }
    }

    // If the letter is in the word AND at the same location/index
    if (letter === correctWord.split('')[index]) {
      lettersdummy[letterMap.get(letter)].inPlace = true;
      letterObj.inPlace = true;
      correctWordMap.set(letter, numberOfLetters - 1);
      correctLettersNum += 1;
    }
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

    const wordLettersCopy = JSON.parse(JSON.stringify(wordLetters));

    if (letter === 'Enter') {
      if (wordNumber >= 6) {
        // Too many words
        return;
      } else if (letterIndex >= 5) {
        // Moves to next word if all letters full
        correctLettersNum = 0;
        for (let i = 0; i < 5; i++) {
          changeLetterCondition(wordLetters, i);
        }
        // console.log(correctLettersNum);
        setWordNumber(wordNumber + 1);
        setLetterIndex(0);
        if (correctLettersNum === 5) {
          alert('You win!');
        }
        if(wordNumber>=5){
          alert('You lose');
        }
      }
    } else if (letter === 'Backspace') {
      if (letterIndex === 0) {
        return;
      }

      wordLettersCopy[wordNumber][letterIndex - 1].letter = ' ';

      if (letterIndex > 0) {
        setLetterIndex(letterIndex - 1);
      }
      setWordLetters(wordLettersCopy);
    } else if (letter.match(/^[A-Za-zd]{1,1}$/)) {
      // Clicking regular letter
      if (wordNumber >= 6) {
        return;
      }
      if (letterIndex >= 5) {
        return;
      }
      wordLettersCopy[wordNumber][letterIndex].letter = letter.toUpperCase();
      setLetterIndex(letterIndex + 1);
      setWordLetters(wordLettersCopy);
    }
  };

  let i = 0;

  return (
    <div className="App">
      <div className="words-panel">
        {wordLetters.map((ele) => {
          i += 1;
          return (
            <Word
              key={'word' + i}
              letters={ele}
              displayWord={i - 1 < wordNumber ? true : false}
            />
          );
        })}
      </div>
      <Keyboard letters={letters} />
    </div>
  );
}

export default App;
