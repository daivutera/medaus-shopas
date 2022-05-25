import styled from 'styled-components';

export const Span = styled.span`
  padding: 0.7rem;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0.2rem;
  color: #f58607;
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
export const Cart = styled.button`
  border-radius: 100%;
  font-weight: 600;
  position: absolute;
  top: 1.6rem;
  right: 12.8rem;
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
