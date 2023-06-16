import React, { useEffect, useState } from "react";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import {
  FlexContainer,
  FlexItems,
  HomeContainer,
  LogoutButton,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  Subtitle,
  Title,
} from "./styles";

const Home = () => {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = async () => {
    try {
      setLoading(true);
      const response = await userService.getProducts();
      console.log(response.data);

      setProducts(response.data);
    } catch (err) {
      console.log("Algo deu errado com o Login" + err);
    }
  };

  const userService = new UserService();

  const logout = () => {
    userService.logout();
    navigate("/");
  };

  return (
    <HomeContainer>
      <Title>Bem vindo!</Title>


      <FlexContainer>
        <LogoutButton onClick={logout}>Sair</LogoutButton>
      </FlexContainer>
      <FlexItems>
        {products?.map((product) => {
          return (
            <>
              <ProductCard key={product.id}>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>Preço: {product.price}</ProductPrice>
                <ProductImage src={product.photo} alt={product.name} />
              </ProductCard>
            </>
          );
        })}
      </FlexItems>
    </HomeContainer>
  );
};

export default Home;
