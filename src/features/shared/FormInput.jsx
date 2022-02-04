import React, { useState, } from 'react';

export default function ({holder, onChange}) {
  const [value, setValue] = useState('');

  return (
      <input value={value}    type={'text'}   placeholder={holder}
             onChange={(event) => {
               setValue(event.target.value)
               onChange(event.target.value)
             }}
      />

  )
}