import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  display: block;
  background: #ec790d19;
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: gray;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
  &:focus {
    color: dark-gray;
  }
`;
export const Label = styled.label`
  display: block;
  margin: 0 0 10px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
`;
