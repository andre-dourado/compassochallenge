import React, { useRef } from 'react';
import { GoSearch } from 'react-icons/go';

import Input from '../Input';

import { Container, StyledForm, Button } from './styles';

const SearchField = ({ placeholder, defaultValue, onSubmit }) => {
  const formRef = useRef(null);

  return (
    <Container>
      <StyledForm ref={formRef} onSubmit={onSubmit}>
        <Input
          name="search"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        <Button type="submit">
          <GoSearch />
        </Button>
      </StyledForm>
    </Container>
  );
};

export default SearchField;
