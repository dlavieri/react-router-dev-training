import React from "react";
import { useApiContext } from "../context/apiContext";

const New = () => {
  const { postAddNew } = useApiContext();
  return (
    <div>
      <h1>New</h1>
    </div>
  );
};

export default New;
