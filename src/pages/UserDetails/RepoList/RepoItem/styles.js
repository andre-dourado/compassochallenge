import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  padding-top: 16px;
  color: #808080;
  position: relative;

  svg {
    margin: 0 2px 0 6px;
  }

  > div {
    display: flex;
    align-items: center;
  }

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

  @media (min-width: 738px) {
    flex-direction: row;
  }
`;

export const RepoFullNameText = styled.h2`
  flex: 1;
  font-weight: 300;
  word-break: break-word;

  span {
    color: #333333;
    font-weight: 500;
  }
`;
