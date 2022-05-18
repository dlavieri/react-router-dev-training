import React, { useState } from "react";

const useApi = (productList) => {
  const [products, setProducts] = useState(productList);

  const getIndex = () => products;

  const getShow = (productid) => {};

  const postUpdate = (productid, params) => {};

  const postAddNew = (productData) => {
    const productList = products.push(productData);
    setProducts(productList);
  };
};

const products = [
  {
    id: 1,
    name: "...",
    desc: "....",
    img: "...",
    relatedProductIds: [2, 3],
  },
  {
    id: 2,
    name: "...",
    desc: "....",
    img: "...",
    relatedProductIds: [1, 5],
  },
  {
    id: 3,
    name: "...",
    desc: "....",
    img: "...",
    relatedProductIds: [1],
  },
  {
    id: 4,
    name: "...",
    desc: "....",
    img: "...",
    relatedProductIds: [6],
  },
  {
    id: 5,
    name: "...",
    desc: "....",
    img: "...",
    relatedProductIds: [2, 6],
  },
  {
    id: 6,
    name: "...",
    desc: "....",
    img: "...",
    relatedProductIds: [4, 5],
  },
];
