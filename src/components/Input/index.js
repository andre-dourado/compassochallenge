import { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: 'value' });
  }, [fieldName, registerField]);

  return <Container defaultValue={defaultValue} ref={inputRef} {...rest} />;
};

export default Input;
