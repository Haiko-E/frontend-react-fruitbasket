import React from 'react';

import './Form.css';

function Form({ form, setForm }) {
  function setFirstname(e) {
    setForm({ ...form, firstname: e.target.value });
  }
  function setLastname(e) {
    setForm({ ...form, lastname: e.target.value });
  }
  function setAge(e) {
    setForm({ ...form, age: e.target.value });
  }
  function setZipcode(e) {
    setForm({ ...form, zipcode: e.target.value });
  }
  function setDeliverfreq(e) {
    setForm({ ...form, deliverfreq: e.target.value });
  }
  function setDeliverBy(e) {
    setForm({ ...form, deliverBy: e.target.value });
  }
  function setComment(e) {
    setForm({ ...form, comments: e.target.value });
  }
  function setTerms(e) {
    setForm({ ...form, terms: !e.target.defaultChecked });
  }

  return (
    <form id='formcontainer'>
      <label htmlFor='firstname'>
        Voornaam{' '}
        <input
          type='text'
          name='firstname'
          id='firstname'
          value={form.firstname}
          onChange={setFirstname}
        />
      </label>
      <label htmlFor='lastname'>
        Achternaam{' '}
        <input
          type='text'
          name='lastname'
          id='lastname'
          value={form.lastname}
          onChange={setLastname}
        />
      </label>
      <label htmlFor='age'>
        Leeftijd{' '}
        <input
          type='number'
          name='age'
          id='age'
          value={form.age}
          onChange={setAge}
        />
      </label>
      <label htmlFor='zipcode'>
        Postcode{' '}
        <input
          type='text'
          name='zipcode'
          id='zipcode'
          value={form.zipcode}
          onChange={setZipcode}
        />
      </label>
      <label htmlFor='deliverfreq'>Bezorgfrequetie</label>
      <select name='deliverfreq' id='deliverfrew' onChange={setDeliverfreq}>
        <option value='everyDay'>Iedere dag</option>
        <option value='everyWeek'>Iedere week</option>
      </select>
      <div onChange={setDeliverBy} value={form.deliverBy}>
        <label htmlFor='deliverDay'>
          <input
            type='radio'
            name='deliver'
            id='deliverDay'
            value='day'
            defaultChecked
          />
          Overdag
        </label>

        <label htmlFor='deliverNight'>
          <input type='radio' name='deliver' id='deliverNight' value='night' />
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
        onChange={setComment}
      ></textarea>
      <div>
        <input
          type='checkbox'
          name='terms'
          id='terms'
          defaultChecked={form.terms}
          onChange={setTerms}
        />
        <label htmlFor='terms'>Ik ga akkoord met de voorwaarden</label>
      </div>
    </form>
  );
}

export default Form;
