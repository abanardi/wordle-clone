import React from 'react';
import Letter from './Letter';

const Word = ({ letters }) => {
  console.log(letters);
  if(letters === undefined || letters === ''){
    letters = '     '
  }
  return (
    <div className="word">
      {letters !== undefined ? letters.split('').map((ele) => (<Letter innerText={ele} />)) : <Letter innerText='' />}
    </div>
    
  )
};

export default Word;
