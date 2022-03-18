import { SimpleGrid, GridItem, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductAddToCart from "../commons/ProductAddToCart";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function GridGeneral({ products }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(4);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirtsProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirtsProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box p={6}>
      <SimpleGrid spacing="30px" minChildWidth="300px">
        {currentProduct?.map((product, i) => (
          <ProductAddToCart key={i} data={product} />
        ))}
      </SimpleGrid>
      <Pagination
        productPerPage={productPerPage}
        totalProduct={products.length}
        paginate={paginate}
      />
    </Box>
  );
}

export default GridGeneral;
