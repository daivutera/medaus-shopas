import styled from 'styled-components';

export const Div = styled.div`
  color: ${(props) => (props.color === 'green' ? 'green' : 'red')};
  font-size: 0.8rem;
  font-weight: 700;
  background-color: white;
  padding: ${(props) => (props.height === 'max' ? '1rem' : '0.2rem')};
  max-width: 21rem;
  margin: 0 auto;
`;
