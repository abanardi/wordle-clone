/** @format */

import React from 'react';
import Letter from './Letter';

const Word = ({ letters }) => {
  if (letters === undefined || letters === '') {
    letters = '     ';
  } else if (letters.length < 5) {
    while (letters.length < 5) {
      letters += ' ';
    }
  }

  let i = 0;
  return (
    <div className="word">
      {letters !== undefined ? (
        letters.split('').map((ele) => {
        i+=1;
        return <Letter key={'word ' + i} innerText={ele} />})
      ) : (
        <Letter innerText="" />
      )}
    </div>
  );
};

export default Word;
