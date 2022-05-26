import styled from 'styled-components';

export const Div = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  width: 600px;
  margin: 3rem auto;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImgDiv = styled.div`
  width: 350px;
  box-sizing: border-box;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
`;
