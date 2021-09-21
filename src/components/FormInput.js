import React from 'react';

function FormInput({
  children,
  input,
  setInput,
  label,
  type,
}) {
  return (
    <label htmlFor={label}>
      {children}
      <input
        type={type}
        name={label}
        id={label}
        value={input}
        onChange={setInput}
      />
    </label>
  );
}

export default FormInput;
