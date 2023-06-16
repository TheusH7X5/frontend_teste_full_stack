import { styled } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
margin-top: 30px;
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #777;
`;

export const LogoutButton = styled.button`
  align-items: center;
  margin: 10px auto 0 auto;
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const ProductListContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FlexItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductCard = styled.div`
  width: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 16px;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;
