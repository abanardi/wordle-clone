/** @format */

import React from 'react';
import Letter from './Letter';

const Keyboard = ({ letters }) => {
  const one = 'qwertyuiop';
  const two = 'asdfghjkl';
  const three = 'zxcvbnm';
  console.log(letters.slice(0, 10));
  let i = 0;

  return (
    <div>
      <div className="row-one">
        {letters.slice(0, 10).map((ele) => {
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele.letter}
              classModifiers="keyboard"
            />
          );
        })}
        {/* {one.split('').map((ele) => {
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele}
              classModifiers="keyboard"
            />
          );
        })} */}
      </div>
      <div className="row-two">
        {/* {two.split('').map((ele) => {
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele}
              classModifiers="keyboard"
            />
          );
        })} */}
      </div>
      <div className="row-three">
        {/* {three.split('').map((ele) => {
          i += 1;
          return (
            <Letter
              key={'keyboard ' + i}
              innerText={ele}
              classModifiers="keyboard"
            />
          );
        })} */}
        <Letter innerText={'Enter'} classModifiers="keyboard enter" />
      </div>
    </div>
  );
};

export default Keyboard;
