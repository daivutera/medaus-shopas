import styled from 'styled-components';

export const Span = styled.span`
  padding: 0.7rem;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0.2rem;
  color: #f58607;
`;
export const DivCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;
export const NumberCart = styled.div`
  margin-right: 2rem;
`;
export const Cart = styled.div`
  border-radius: 100%;
  font-weight: 600;
  position: absolute;
  top: -0.6rem;
  right: 10rem;
  color: white;
  border: none;
  background-color: red;
  padding: 0.2rem 0.4rem;

  &:hover {
    padding: 0.5rem;
  }
`;
export const Img = styled.img`
  margin-left: 2rem;
`;
