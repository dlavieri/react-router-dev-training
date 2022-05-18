import { useState } from "react";

export const useApi = (productList) => {
  const [products, setProducts] = useState(productList);

  const getIndex = () => products;

  const getShow = (productid) =>
    products.filter((prod) => prod.id === productid);

  const postUpdate = (productid, productData) => {
    let productList = [...products];
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === productid) {
        productList.splice(i, 1, productData);
        break;
      }
    }
    setProducts(productList);
  };

  const postAddNew = (productData) => {
    const productList = products.push(productData);
    setProducts(productList);
  };

  return { products, getIndex, getShow, postUpdate, postAddNew };
};

export const data = [
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
