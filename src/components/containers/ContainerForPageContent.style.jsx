import styled, { withTheme } from 'styled-components';

export const Div = styled.div`
  max-width: 80%;
  margin: 2rem auto 0rem auto;
  padding: 0.5rem 2rem 2rem;
  background-color: ${(props) => (props.type === 'white' ? 'white' : 'none')};
  box-sizing: border-box;
`;
