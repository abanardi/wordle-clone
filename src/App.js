/** @format */

import { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Word from './components/Word';

function App() {
  const [words, setWords] = useState(['', '', '', '', '', '']);
  const [wordNumber, setWordNumber] = useState(0);
  const [correctWord, setCorrectWord] = useState('learn');
  const [letterIndex, setLetterIndex] = useState(0);

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
    emptyWords.push(emptyWordListObj.map((ele)=>ele));
  }
  // console.log(emptyWords);
  // console.log(emptyWords[0][0]);

  const [wordLetters, setWordLetters] = useState(emptyWords);

  // console.log(wordLetters);

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
    
    const wordLettersCopy = JSON.parse(JSON.stringify(wordLetters));
    
    if(letter === 'Enter'){
      if(wordNumber >= 6){
        console.log('Too many words');
        return;
      }
      else if(letterIndex >= 5){
        console.log('Moved to next word');

        for(let i=0; i<5; i++){
          console.log(wordLetters[wordNumber][i].letter);
          changeLetterCondition(wordLetters[wordNumber][i].letter.toLowerCase());
        }
        setWordNumber(wordNumber+1);
        setLetterIndex(0);
      }
    }
    else if(letter === 'Backspace'){
      if(letterIndex === 0){
        return;
      }
      // console.log('Delete Letter Index', letterIndex-1);

      wordLettersCopy[wordNumber][letterIndex-1].letter = ' ';

      if(letterIndex > 0){
        setLetterIndex(letterIndex-1);
      }
      // console.log(wordLettersCopy);
      // console.log(wordLetters);
      setWordLetters(wordLettersCopy);
      // console.log(wordLetters);

    }
    else if(letter.match(/^[A-Za-zd]{1,1}$/)){
      // console.log("Letter Index:",letterIndex);
      if(wordNumber >= 6){
        console.log('Error');
        return;
      }
      if(letterIndex >= 5){
        // console.log('Too long!');
        // console.log(wordLetters);
        return;
      }
      // console.log('Letter Index initial', letterIndex);
      wordLettersCopy[wordNumber][letterIndex].letter = letter.toUpperCase();
      setLetterIndex(letterIndex+1);
      // console.log('Letter Index', letterIndex);
      // console.log('Trigger');
      // console.log(wordLettersCopy);
      // console.log('Letter Index:',letterIndex);
      setWordLetters(wordLettersCopy);

    }

  };


  let i = 0;

  return (
    <div className="App">
      <div className="words-panel">
        {wordLetters.map((ele) => {
          i += 1;
          // console.log('i',i);
          // console.log('wordNumber',wordNumber);
          return <Word key={'word' + i} letters={ele} displayWord = {i-1 < wordNumber ? true : false} />;
        })}
      </div>
      <Keyboard letters={letters} />
    </div>
  );
}

export default App;
