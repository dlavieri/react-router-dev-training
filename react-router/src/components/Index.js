import React from "react";
import styled from "styled-components";
import { useApiContext } from "../context/apiContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { products } = useApiContext();

  return (
    <div>
      <h1>Index</h1>
      <StyledContainer>
        {products.map((product) => {
          return (
            <Link to={`/products/${product.id}`}>
              <StyledCard>
                <img src={product.img} />
                <h5>{product.name}</h5>
                <p>SKU: {product.id}</p>
                <p>{product.desc}</p>
              </StyledCard>
            </Link>
          );
        })}
      </StyledContainer>
    </div>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  height: 250px;
  width: 200px;
  margin-bottom: 20px;
  margin-right: 15px;
  border-radius: 8px;
  border: 1px solid grey;
  cursor: pointer;
  background: white;
  transition: background 200ms ease-in-out;

  :hover {
    background: lightblue;
  }

  * {
    margin: 0;
  }

  img {
    width: 150px;
  }

  h5 {
    padding: 5px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export default Index;
