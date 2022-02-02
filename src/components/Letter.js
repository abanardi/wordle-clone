import React from 'react';

const Letter = ({ innerText, classModifiers }) => {
  return <div className='letter-div'>
      {/* <p className={'letter ' + classModifiers} >{innerText}</p> */}
      <p className={`letter ${classModifiers}`} >{innerText}</p>
  </div>;
};

export default Letter;
