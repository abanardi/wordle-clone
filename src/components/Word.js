/** @format */

import React from 'react';
import Letter from './Letter';

const Word = ({ letters, displayWord }) => {
  // Letters is a string that shows what to output for each word (line)
  // displayWord decides whether or not to show the color coding

  // console.log(displayWord);

  let i = 0;
  return (
    <div className="word">
      {letters.map((ele) => {
        i++;
        return <Letter key = {'word' + i}innerText={ele.letter} />
      })}

    </div>
  );
};

export default Word;
