import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import FruitCounter from './components/FruitCounter';

function App() {
  const [aardbei, setAardbei] = useState(0);
  const [banaan, setBanaan] = useState(0);
  const [appel, setAppels] = useState(0);
  const [kiwi, setKiwi] = useState(0);

  const [userInput, setUserInput] = useState({
    firstname: '',
    lastname: '',
    age: '',
    zipcode: '',
    deliverfreq: 'everyDay',
    deliverBy: 'day',
    comments: '',
    terms: true,
  });

  function resetAmount() {
    setAardbei(0);
    setBanaan(0);
    setAppels(0);
    setKiwi(0);
  }

  function sendForm() {
    console.log('aardbeien: ' + aardbei);
    console.log('bananen: ' + banaan);
    console.log('appels: ' + appel);
    console.log("kiwi's: " + kiwi);
    console.log(userInput);
  }

  return (
    <div className='fruits'>
      <h1>Fruitmand bezorgservice</h1>
      <FruitCounter amount={aardbei} setAmount={setAardbei}>
        🍓Aardbeien
      </FruitCounter>
      <FruitCounter amount={banaan} setAmount={setBanaan}>
        🍌Bananen
      </FruitCounter>
      <FruitCounter amount={appel} setAmount={setAppels}>
        🍏Appels
      </FruitCounter>
      <FruitCounter amount={kiwi} setAmount={setKiwi}>
        🥝Kiwi's
      </FruitCounter>
      <Button clickHandler={resetAmount}>Reset</Button>
      <Form form={userInput} setForm={setUserInput} />
      <Button clickHandler={sendForm}>Verzenden</Button>
    </div>
  );
}

export default App;
