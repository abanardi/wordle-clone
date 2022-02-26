/** @format */

import React from 'react';
import Letter from './Letter';

const Word = ({ letters }) => {
  // Letters is a string that shows what to output for each word (line)

  const modifiersArray = [];
  let modifiers = '';

  // Checks for submitted, in word, or in place
  for (let i = 0; i < 5; i++) {
    if (letters[i].submitted) {
      modifiers += 'used ';
    }
    if (letters[i].inWord) {
      modifiers += 'in-word ';
    }
    if (letters[i].inPlace) {
      modifiers += 'in-place ';
    }
    // Adds to array and clears the modifiers for every letter
    modifiersArray.push(modifiers);
    modifiers = '';
  }

  let i = 0;
  return (
    <div className="word">
      {letters.map((ele) => {
        i++;
        return (
          <Letter
            key={'word' + i}
            innerText={ele.letter}
            classModifiers={modifiersArray[i - 1]}
          />
        );
      })}
    </div>
  );
};

export default Word;
