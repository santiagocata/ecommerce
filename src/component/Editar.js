import Boton from "../commons/Boton";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Agregar = () => {
  const navigate = useNavigate();
  const [toEdit, setToEdit] = useState("");
  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [productDescription, setDescription] = useState("");
  const [productPrecio, setPrecio] = useState();
  const [productoUrl, setProductoUrl] = useState();

  const handleSubmit = () => {
    axios
      .put(`/products/${toEdit}`, {
        name: productName,
        price: productPrecio,
        description: productDescription,
        image: productoUrl,
      })
      .then((data) => {
        alert("Se ha Modificado el Producto");
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios.get(`/products/${toEdit}`).then((product) => {
      setProduct(product.data);
      setProductName(product.data.name);
      setDescription(product.data.description);
      setPrecio(product.data.price);
      setProductoUrl(product.data.image);
    });
  }, [toEdit]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Editar Productos
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl
              id="text"
              onChange={(e) => {
                setToEdit(e.target.value);
              }}
              isRequired
            >
              <FormLabel>Seleccionar Producto a Editar</FormLabel>
              <Boton />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="name">
                  <FormLabel>Nombre del Producto</FormLabel>
                  <Input
                    type="text"
                    value={productName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                    placeholder="Producto a Editar"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="number">
              <FormLabel>Precio del Producto</FormLabel>
              <Input
                type="number"
                value={productPrecio}
                onChange={(e) => {
                  setPrecio(e.target.value);
                }}
                placeholder="Precio a Editar"
              />
            </FormControl>
            <FormControl id="text">
              <FormLabel>Descripcion Del Producto</FormLabel>
              <Input
                type="text"
                value={productDescription}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Descripcion a Editar"
              />
            </FormControl>
            <FormControl id="url">
              <FormLabel>Imagen Del Producto</FormLabel>
              <Input
                type="url"
                value={productoUrl}
                onChange={(e) => {
                  setProductoUrl(e.target.value);
                }}
                placeholder="Imagen a Editar"
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => handleSubmit()}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Editar Producto
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Agregar;
