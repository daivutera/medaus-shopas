import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.7rem;
  background-color: ${(props) =>
    props.color === 'secondary' || props.disabled ? 'white' : '#f3662e'};
  border-radius: 5px;
  border: ${(props) =>
    props.color === 'secondary' || props.disabled ? '1px solid grey' : 'none'};
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0.2rem;
  color: ${(props) =>
    props.color === 'secondary' || props.disabled ? 'black' : 'white'};
  cursor: pointer;
`;
