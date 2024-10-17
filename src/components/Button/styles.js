import styled from 'styled-components';

export const ButtonContainer = styled.button` 
  width: ${({ isWide, isZero }) =>
  isWide ? '50vw' : isZero ? '50vw' : '25vw'};

  height: 80px;
  /*max-width: ${({ isWide }) => (isWide ? '180px' : '80px')};*/
  border-radius: 0%;
  font-size: 1.5rem;
  font-weight: 700;
  border: 1px solid black;
  background-color: ${({ isOperator }) => (isOperator ? '#ff9c0f' : '#a5a5a5')};
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, transform 0.1s;
  /*margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0.5%;
  margin-left: 0.5%;*/

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;
