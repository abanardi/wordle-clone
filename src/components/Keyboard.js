import React from 'react';
import Letter from './Letter';

const Keyboard = () => {
  const one = 'qwertyuiop';
  const two = 'asdfghjkl';
  const three = 'zxcvbnm';

  return (
    <div>
      <div className="row-one">
        {one.split('').map((ele) => (
          <Letter innerText={ele} classModifiers="keyboard" />
        ))}
      </div>
      <div className="row-two">
        {two.split('').map((ele) => (
          <Letter innerText={ele} classModifiers="keyboard" />
        ))}
      </div>
      <div className="row-three">
        {three.split('').map((ele) => (
          <Letter innerText={ele} classModifiers="keyboard" />
        ))}
        <Letter innerText={'Enter'} classModifiers="keyboard enter" />
      </div>
    </div>
  );
};

export default Keyboard;
