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
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [toDelete, setToDelete] = useState("");
  const [product, setProduct] = useState({});

  const handleSubmit = () => {
    axios
      .delete(`/products/${toDelete}`)
      .then((data) => {
      alert("Se ha eliminado el producto")
      navigate("/")
      })
      .catch((err) => alert(err))
  };

  useEffect(() => {
    axios.get(`/products/${toDelete}`).then((product) => {
      setProduct(product.data)
    });
  }, [toDelete]);

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
            Eliminar Productos
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
                setToDelete(e.target.value);
              }}
              isRequired
            >
              <FormLabel>Seleccionar Producto a Eliminar</FormLabel>
              <Boton />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="name" >
                  <FormLabel>Nombre del Producto</FormLabel>
                  <Input
                    type="text"
                    value={product.name}
                    placeholder="Producto a Editar"
                    isDisabled={true}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="number" >
              <FormLabel>Precio del Producto</FormLabel>
              <Input
                type="number"
                value={product.price}
                placeholder="Precio a Editar"
                isDisabled={true}
              />
            </FormControl>
            <FormControl id="text" >
              <FormLabel>Descripcion Del Producto</FormLabel>
              <Input
                type="text"
                value={product.description}
                placeholder="Descripcion a Editar"
                isDisabled={true}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() =>
                  handleSubmit()
                }
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Eliminar Producto
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Agregar;