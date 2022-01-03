import React, { useState } from 'react';

import './BePopBoard.css';
export const BePopBoard = ({ setCount, count }) => {
  const [clicked, setClicked] = useState(true);
  return (
    <div className='bepop-innergrid'>
      <img
        src={clicked ? './closed.jpg' : './open.jpg'}
        alt='closed'
        onClick={() => {
          setCount(count + 1);
          setClicked(false);
          var audio = new Audio('./pop.mp3');
          audio.play();
          setTimeout(() => {
            setClicked(true);
          }, 200);
        }}
      />
    </div>
  );
};
