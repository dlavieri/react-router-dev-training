import React, { createContext, useContext } from "react";
import { data, useApi } from "../api/api";

const apiContext = createContext({});

export const useApiContext = () => useContext(apiContext);

const ApiProvider = ({ children }) => {
  const { products, getShow, postUpdate, postAddNew } = useApi(data);

  return (
    <apiContext.Provider value={{ products, getShow, postUpdate, postAddNew }}>
      {children}
    </apiContext.Provider>
  );
};

export default ApiProvider;
