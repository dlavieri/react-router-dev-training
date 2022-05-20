import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useApiContext } from "../context/apiContext";

const Show = () => {
  const { productid } = useParams();
  const { getShow } = useApiContext();
  const product = getShow(productid);
  return (
    <div>
      <h1>{product.name}</h1>
      <StyledImg src={product.img} />
      <p>{product.desc}</p>
      <p>SKU: {product.id}</p>

      <Link to="edit">Edit Product</Link>

      <StyledList>
        <div>Related Products:</div>
        <ul>
          {product.relatedProductIds.map((id) => {
            return (
              <li>
                <Link to={`/products/${id}`}>{getShow(id).name}</Link>
              </li>
            );
          })}
        </ul>
      </StyledList>
    </div>
  );
};

const StyledImg = styled.img`
  width: 60%;
  max-width: 500px;
  min-width: 300px;
`;

const StyledList = styled.div`
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  }

  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20%;
  margin: 0 auto;
`;

export default Show;
