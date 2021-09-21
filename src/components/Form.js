import React from 'react';
import Button from './Button';
import FormInput from './FormInput';

import './Form.css';

function Form({ form, setForm, onSubmit }) {
  function setTerms(e) {
    setForm({ ...form, terms: !e.target.defaultChecked });
  }

  function onChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
    console.log(key);
    console.log(value);
  }

  return (
    <form id='formcontainer' onSubmit={onSubmit}>
      <FormInput
        input={form.firstname}
        setInput={onChange}
        label='firstname'
      >
        Voornaam
      </FormInput>
      <FormInput
        input={form.lastname}
        setInput={onChange}
        label='lastname'
      >
        Achternaam
      </FormInput>
      <FormInput
        input={form.age}
        setInput={onChange}
        label='age'
        type='number'
      >
        Leeftijd
      </FormInput>
      <FormInput
        input={form.zipcode}
        setInput={onChange}
        label='zipcode'
      >
        Postcode
      </FormInput>

      <label htmlFor='deliverfreq'>Bezorgfrequetie</label>
      <select
        name='deliverfreq'
        id='deliverfrew'
        onChange={onChange}
        value={form.deliverfreq}
      >
        <option value='everyDay'>Iedere dag</option>
        <option value='everyWeek'>Iedere week</option>
      </select>
      <div>
        <label htmlFor='deliverDay'>
          <input
            type='radio'
            name='deliverBy'
            id='deliverDay'
            value='day'
            checked={form.deliverBy === 'day'}
            onChange={onChange}
          />
          Overdag
        </label>

        <label htmlFor='deliverNight'>
          <input
            type='radio'
            name='deliverBy'
            id='deliverNight'
            value='night'
            onChange={onChange}
          />
          Avond
        </label>
      </div>
      <label htmlFor='comments'>Opmerkingen</label>
      <textarea
        name='comments'
        id='comments'
        cols='30'
        rows='10'
        placeholder='Vul in'
        onChange={onChange}
        value={form.comments}
      ></textarea>
      <div>
        <input
          type='checkbox'
          name='terms'
          id='terms'
          defaultChecked={form.terms}
          onChange={setTerms}
        />
        <label htmlFor='terms'>
          Ik ga akkoord met de voorwaarden
        </label>
      </div>
      <Button>Verzenden</Button>
    </form>
  );
}

export default Form;
