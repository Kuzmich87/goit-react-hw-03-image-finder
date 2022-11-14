import styled from 'styled-components';

export const LoadMore = styled.button`
  display: block;
  margin: 0 auto 16px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #FFA500;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  border-radius: 4px;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    opacity: 0.6;
  }
`;