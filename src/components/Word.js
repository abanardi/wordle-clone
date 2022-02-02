import React from 'react';
import Letter from './Letter';

const Word = () => {
  return (
    <div className='word'>
      <Letter innerText="P" classModifiers=''/>
      <Letter innerText="L" />
      <Letter innerText="A" />
      <Letter innerText="N" />
      <Letter innerText="E" />
    </div>
  );
};

export default Word;
