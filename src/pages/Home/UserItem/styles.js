import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-top: 16px;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    border-bottom: solid 1px #eee;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  & + & {
    margin-top: 16px;
  }

  > svg {
    font-size: 24px;
  }
`;

export const Avatar = styled.img`
  max-width: 46px;
  height: auto;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Username = styled.h2`
  flex: 1;
  font-weight: 300;
  word-break: break-word;

  span {
    color: #acacac;
    font-weight: 500;
  }
`;
