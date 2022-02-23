/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
  const [words, setWords] = useState(['', '', '', '', '', '']);
  const [wordNumber, setWordNumber] = useState(0);
  const [correctWord, setCorrectWord] = useState('learn');
  let letterIndex = 0;

  // Alphabet used for keyboard
  const one = 'qwertyuiop';
  const two = 'asdfghjkl';
  const three = 'zxcvbnm';

  console.log(words);
  
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

  for (let i = 0; i < 5; i++) {
    emptyWords.push(emptyWordListObj.map((ele)=>ele));
  }
  // console.log(emptyWords);
  // console.log(emptyWords[0][0]);

  const [wordLetters, setWordLetters] = useState(emptyWords);

  console.log(wordLetters);

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


    // const wordsCopy = words.map((ele) => ele); // Dummy array that we're going to modify
    // let word = words[wordNumber];


    /*
    If Enter key is hit when wordNumber is equal to 6, it does snothing
    If letterIndex is equal to 4 (meaning the word isn't complete yet), then keep passing on

    If it's any letter:
    - change the letter of the wordIndex and letterIndex
    - if the letterIndex is greater than 4, do nothing
    - increment the letterIndex

    If it's a backspace:
    - decrease the letterIndex
    - if the letterIndex is going to be less than 0, do nothing
    - set the letter of the right address to an empty string
    */
    
    const wordLettersCopy = wordLetters.map((ele)=>ele);
    
    if(letter === 'Enter'){
      if(wordNumber >= 6){
        return;
      }
      else if(letterIndex >= 4){
        changeLetterCondition('a');
      }
    }
    else if(letter === 'Backspace'){
      if(letterIndex === 1){
        return;
      }

      wordLettersCopy[0][1] = {
        letter: 'D',
        submitted: false,
        inWord: false,
        inPlace: false,
      };
      console.log(wordLettersCopy);
      console.log(wordLetters);

    }


    // if (letter === 'Enter') {
    //   // What happens when you hit enter key to submit word
    //   if (wordNumber >= 6) {
    //     return;
    //   } else if (word.length < 5) {
    //   } else {
    //     // Updates word that you're on and also highlights the letter on the keyboard
    //     changeLetterCondition('y');
    //     setWordNumber(wordNumber + 1);
    //   }
    // } else if (letter === 'Backspace') {
    //   let deleted = word.slice(0, word.length - 1);
    //   wordsCopy[wordNumber] = deleted;
    //   setWords(wordsCopy);
    // } else if (wordNumber >= 6) {
    // } else if (letter.match(/^[A-Za-zd]{1,1}$/)) {
    //   // Matches an alphabetical character
    //   word += letter.toUpperCase();
    //   console.log(word);
    //   if (word.length >= 6 ) {
    //     console.log('Trigger');
    //     return;
    //   }

    //   // Sets word equal to the previous word + a letter
    //   // Updates list to dummy list
    //   wordsCopy[wordNumber] = word;
    //   setWords(wordsCopy);
    // } else {
    //   // console.log('Does not work!');
    // }
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
