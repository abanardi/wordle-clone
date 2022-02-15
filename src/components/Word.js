/** @format */

import React from 'react';
import Letter from './Letter';

const Word = ({ letters, displayWord }) => {
  // Letters is a string that shows what to output for each word (line)
  // displayWord decides whether or not to show the color coding

  if (letters === undefined || letters === '') {
    letters = '     '; // If letters is empty
  } else if (letters.length < 5) {
    while (letters.length < 5) {
      // Keeps adding spaces until it's 5 long
      letters += ' ';
    }
  }

  let i = 0;
  return (
    <div className="word">
      {letters !== undefined ? (
        letters.split('').map((ele) => {
          // Sets the letter's text to the proper letter
          i += 1;
          return <Letter key={'word ' + i} innerText={ele} />;
        })
      ) : (
        <Letter innerText="" /> // Empty string if there's nothing
      )}
    </div>
  );
};

export default Word;
