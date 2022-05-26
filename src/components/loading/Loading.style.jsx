import styled from 'styled-components';

export const Loading = styled.div`
  padding: 0.7rem;
  font-size: 1rem;
  margin: 0.3rem auto 0.3rem;
  color: black;

  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #f0c91e; /* Blue */
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: 3rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
