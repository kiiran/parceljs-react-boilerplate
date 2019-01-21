import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  border: 3px solid transparent;
  border-top-color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  height: 70px;
  width: 70px;
  animation: spin 0.6s linear infinite;
`;

export default () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);
