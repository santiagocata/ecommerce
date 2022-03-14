import Grid from "./Grid";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/products/by/category/${id}`)
      .then((result) => result.data)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <Grid products={products} />;
};

export default Categories;
