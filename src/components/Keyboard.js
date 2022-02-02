import React from 'react';
import Letter from './Letter';

const Keyboard = () => {
    const one = 'qwertyuiop';
    const two = 'asdfghjkl';
    const three = 'zxcvbnm';

    one.split('').forEach(element => {
        console.log(element);
    });

  return <div>
      <div className='row-one'>
          <Letter innerText='H' />
      </div>
      <div className='row-two'>
      </div>
      <div className='row-three'>
      </div>

  </div>;
};


export default Keyboard;
