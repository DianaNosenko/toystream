import React from 'react';
import './Unicorn.scss'

const Unicorn = () => {
  let i = 1;
  const unicornCells = [];

  while (i <= 840) {
    unicornCells.push(
      <div className={`unicornCell U${i}`} key={`unicorn-${i}`}>
      </div>
    );
    i++;
  }

  return (
    <div className='unicornWrapper'>
      {unicornCells}
    </div>
  );
}

export default Unicorn;
