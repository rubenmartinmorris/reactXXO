import './Xxo.css';
import { Statistics } from './Statistics';
import { XxoBoard } from './XxoBoard';
import { useState } from 'react';
export const Xxo = () => {
  const [winAndLose, setwinAndLose] = useState([
    { name: 'X X O', wins: 0, lose: 0 },
  ]);
  return (
    <div className='container'>
      <Statistics stuff={winAndLose} />
      <XxoBoard />
    </div>
  );
};
