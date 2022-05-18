import React from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../context/apiContext";

const Show = () => {
  const { productid } = useParams();
  const { getShow } = useApiContext();
  const product = getShow(productid);
  return (
    <div>
      <h1>{product.name}</h1>
      <p>SKU: {product.id}</p>
    </div>
  );
};

export default Show;
