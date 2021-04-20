import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14px;

  > div:first-of-type {
    margin-bottom: 14px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 100%;
  max-width: 800px;
`;
