import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductAddToCart from "../commons/ProductAddToCart";
import {useNavigate} from "react-router-dom" 

function GridGeneral() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()

  const handleClick = (id) => {
    axios
    .get(`/products/${id}`)
    .then((result) => result.data)
    .then(() => {
      navigate(`products/${id}`)
      
    })
    .catch((err) => console.log(err));
  }


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
         <Link to={`products/${product.id}`}> 
        <ProductAddToCart onClick={() => handleClick(product.id)} key={i} data={product} />
         </Link> 
      ))}
    </SimpleGrid>
  );
}

export default GridGeneral;
