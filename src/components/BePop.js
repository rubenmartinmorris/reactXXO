import './BePop.css';
import { Statistics } from './Statistics';
import { BePopBoard } from './BePopBoard';
import { useState } from 'react';
export const BePop = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <Statistics stuff={[{ name: 'Be Pop', count: count }]} />
      <BePopBoard setCount={setCount} count={count} />
    </div>
  );
};
