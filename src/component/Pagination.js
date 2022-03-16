import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";

const Pagination = ({ productPerPage, totalProduct, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Box>
      <Stack spacing={4} direction="row" align="center" justify="center">
        {pageNumbers.map((number, i) => (
          <Button key={i} onClick={() => paginate(number)}>
            {number}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Pagination;
