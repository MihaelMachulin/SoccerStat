import React, { useState } from 'react';

export default function ({holder, onChange}) {
  const [value, setValue] = useState('');
  const style = {
    border: '1px solid transparent',
    borderRadius: '5px',
    marginBottom: '3px', marginTop: '3px',
    backgroundColor: 'var(--rs-input-bg)',
    color: 'var(--rs-text-primary)'
  }

  return (
      <input value={value}    type={'text'}
             placeholder={holder} style={style}
             onChange={(event) => {
               setValue(event.target.value)
               onChange(event.target.value)
             }}
      />
  )
}