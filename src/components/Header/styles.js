import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  min-height: 48px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;

  > div {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
