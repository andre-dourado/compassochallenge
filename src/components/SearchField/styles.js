import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';

export const Container = styled.div`
  border: solid 1px #dddddd;
  background: #fafafa;
  border-radius: 4px;
  height: 38px;
  padding-left: 8px;
  width: 100%;
  max-width: 320px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  min-width: 32px;

  svg {
    color: #bbbbbb;
    margin-left: 8px;
  }

  &:hover {
    background: ${shade(0.2, '#909090')};
  }
`;
