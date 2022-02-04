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
      // console.log(words);
      if (ele.key.match(/^[A-Za-zd]{1,1}$/)) {
        let word = words[3];
        word += ele.key;
        console.log(word);
        // console.log(ele.key);
        // if (word.length >= 6) {
        //   console.log('Too long');
        // }
        // else {
        const wordsCopy = words.map((ele) => ele);
        wordsCopy[3] = word;
        // console.log(wordsCopy);
        // console.log(words);
        console.log('Not too long');
        // console.log(wordsCopy);
        setWords(wordsCopy);
        // console.log(words);
        // }
      }
    });
  }, [words]);

  console.log(words);

  // function addLetter(wordIndex, letter) {
  //   const wordsCopy = words.map((ele) => ele);
  //   wordsCopy[wordIndex] += letter;
  //   setWords(wordsCopy);
  //   // console.log(words);
  // }

  // document.addEventListener('keydown', (ele) => {
  //   if (ele.key.match(/^[A-Za-zd]{1,1}$/)) {
  //     console.log(ele.key);
  //     addLetter(1, ele.key);
  //   }

  //   // const wordsCopy = words;
  //   // wordsCopy[3] += ele.key;
  //   // // console.log(wordsCopy);
  //   // // console.log(words);
  //   // setWords(wordsCopy);
  // });

  // console.log(words);

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
