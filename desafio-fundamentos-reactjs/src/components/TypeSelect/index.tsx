import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TypeSelectProps extends InputHTMLAttributes<HTMLParamElement> {
  name: string;
}

const Input: React.FC<TypeSelectProps> = ({ name }) => {
  const selectRef = useRef<HTMLParamElement>(null);
  const [type, setType] = useState('');

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });

    if (defaultValue) setType(defaultValue);
  }, [registerField, fieldName, defaultValue]);

  return (
    <>
      <Container>
        <button
          type="button"
          className={type === 'income' ? 'active' : ''}
          onClick={() => setType('income')}
        >
          Income
        </button>

        <button
          type="button"
          className={type === 'outcome' ? 'active' : ''}
          onClick={() => setType('outcome')}
        >
          Outcome
        </button>
      </Container>

      <param defaultValue={defaultValue} ref={selectRef} value={type} />
      {error}
    </>
  );
};

export default Input;
