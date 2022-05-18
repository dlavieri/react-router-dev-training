import { useState } from "react";

export const useApi = (productList) => {
  const [products, setProducts] = useState(productList);

  const getShow = (productid) =>
    products.filter((prod) => prod.id == parseInt(productid))[0];

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

  return { products, getShow, postUpdate, postAddNew };
};

export const data = [
  {
    id: 1,
    name: "Pineapple Cats",
    desc: "Some cats love pineapples.",
    img: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1138179540-scaled.jpg?w=2560",
    relatedProductIds: [2, 3],
  },
  {
    id: 2,
    name: "Bowl of Cat",
    desc: "Every nutritious breakfast includes a bowl of Cat.",
    img: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-141809950.jpg?w=2538",
    relatedProductIds: [1, 5],
  },
  {
    id: 3,
    name: "Kitten Ribbon",
    desc: "Gift packaging included.",
    img: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg?w=1670",
    relatedProductIds: [1],
  },
  {
    id: 4,
    name: "Surprise!",
    desc: "!!!",
    img: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-173240099.jpg?w=2325",
    relatedProductIds: [6],
  },
  {
    id: 5,
    name: "Wisecat",
    desc: "He so wise.",
    img: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1163112877-scaled.jpg?w=2560",
    relatedProductIds: [2, 6],
  },
  {
    id: 6,
    name: "Cat or Meerkat",
    desc: "Hindpaws boi.",
    img: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-615582402-scaled.jpg?w=2560",
    relatedProductIds: [4, 5],
  },
];
