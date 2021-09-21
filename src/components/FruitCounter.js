import React from 'react';
import './FruitCounter.css';

function FruitCounter({ children, amount, setAmount }) {
  function counterMin() {
    amount > 0 && setAmount((prevAmount) => prevAmount - 1);
  }

  function counterPlus() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  return (
    <div id='fruitcounter'>
      <h2>{children}</h2>
      <button
        type='button'
        onClick={counterMin}
        className={amount > 1 ? 'button-outline' : ''}
      >
        -
      </button>
      <p>{amount}</p>
      <button
        type='button'
        onClick={counterPlus}
        className={amount > 1 ? 'button-outline' : ''}
      >
        +
      </button>
    </div>
  );
}

export default FruitCounter;
