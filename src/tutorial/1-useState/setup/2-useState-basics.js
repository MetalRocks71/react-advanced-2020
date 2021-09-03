import React, { useState, Fragment } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random');

  const handleClick = () => {
    if (text === 'random') {
      setText('Title 1 again');
    } else {
      setText('Title 2');
    }
  };

  return (
    <Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change the title
      </button>
    </Fragment>
  );
};

export default UseStateBasics;
