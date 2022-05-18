import React from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../context/apiContext";

const Edit = () => {
  const { postUpdate } = useApiContext();
  const { productid } = useParams();

  return (
    <div>
      <h1>Edit</h1>
    </div>
  );
};

export default Edit;
