/** @format */

import React from 'react';
import Letter from './Letter';

const Keyboard = ({ letters }) => {
  // Letters is a list of letter objects

  let i = 0;
  return (
    <div>
      <div className="row-one">
        {/*First row */}
        {letters.slice(0, 10).map((ele) => {
          let modifiers = '';

          // Applies the style elements
          if (ele.used) {
            modifiers += 'used ';
          }
          if (ele.inWord) {
            modifiers += 'in-word ';
          }
          if (ele.inPlace) {
            modifiers += 'in-place';
          }
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele.letter}
              classModifiers={'keyboard ' + modifiers}
            />
          );
        })}
      </div>
      <div className="row-two">
        {/*Second row */}
        {letters.slice(10, 19).map((ele) => {
          let modifiers = '';

          // Applies the style elements
          if (ele.used) {
            modifiers += 'used ';
          }
          if (ele.inWord) {
            modifiers += 'in-word ';
          }
          if (ele.inPlace) {
            modifiers += 'in-place';
          }
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele.letter}
              classModifiers={'keyboard ' + modifiers}
            />
          );
        })}
      </div>
      <div className="row-three">
        {/*Third row */}
        {letters.slice(19, 26).map((ele) => {
          let modifiers = '';

          // Applies the style elements
          if (ele.used) {
            modifiers += 'used ';
          }
          if (ele.inWord) {
            modifiers += 'in-word ';
          }
          if (ele.inPlace) {
            modifiers += 'in-place';
          }
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele.letter}
              classModifiers={'keyboard ' + modifiers}
            />
          );
        })}
        <Letter innerText={'Enter'} classModifiers="keyboard enter" />
      </div>
    </div>
  );
};

export default Keyboard;
