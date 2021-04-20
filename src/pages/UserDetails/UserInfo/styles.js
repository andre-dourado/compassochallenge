import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 208px;
  border-radius: 50%;
`;

export const Username = styled.h1`
  flex: 1;
  word-break: break-word;
  color: #24292e;
  margin: 8px 0;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: #f3f4f5;
  border: rgba(27, 31, 35, 0.15);
  padding: 8px 16px;
  border-radius: 6px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  font-size: 22px;
`;
