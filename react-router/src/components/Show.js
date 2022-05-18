import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { productid } = useParams();
  return (
    <div>
      <h1>Show</h1>
      <p>Product ID: {productid}</p>
    </div>
  );
};

export default Show;
