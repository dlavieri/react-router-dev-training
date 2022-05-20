import React from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../context/apiContext";

const Edit = () => {
  const { postUpdate, getShow } = useApiContext();
  const { productid } = useParams();
  const product = getShow(productid);

  return (
    <div>
      <h1>Edit</h1>
      <input />
      Edit things on this view
    </div>
  );
};

export default Edit;
