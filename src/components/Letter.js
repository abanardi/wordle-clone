import React from 'react';

const Letter = ({ innerText, classModifiers, onClick }) => {
  return <div className={classModifiers!=null ? 'letter-div ' + classModifiers : 'letter-div'}>
      {/* <p className={'letter ' + classModifiers} >{innerText}</p> */}
      <p className={`letter`} >{innerText}</p>
  </div>;
};

export default Letter;
