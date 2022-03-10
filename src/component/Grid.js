import { SimpleGrid, GridItem } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductAddToCart from "../commons/ProductAddToCart";

function GridGeneral() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((result) => result.data)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <SimpleGrid spacing="30px" minChildWidth="300px">
      {products?.map((product, i) => (
        // {/* <Link to=''> */}
        <ProductAddToCart key={i} data={product} />
        // {/* </Link> */}
      ))}
    </SimpleGrid>
  );
}

export default GridGeneral;
