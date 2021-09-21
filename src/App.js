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

  function submitHandler(e) {
    e.preventDefault();
    const order = {
      ...userInput,
      order: {
        aardbeien: aardbei,
        bananen: banaan,
        appels: appel,
        kiwi: kiwi,
      },
    };
    console.log(order);

    setUserInput({
      firstname: '',
      lastname: '',
      age: '',
      zipcode: '',
      deliverfreq: 'everyDay',
      deliverBy: 'day',
      comments: '',
      terms: true,
    });

    setAardbei(0);
    setBanaan(0);
    setAppels(0);
    setKiwi(0);
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
      <Form
        form={userInput}
        setForm={setUserInput}
        onSubmit={submitHandler}
      />
    </div>
  );
}

export default App;
