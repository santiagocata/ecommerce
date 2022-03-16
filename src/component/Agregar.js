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
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import BotonCategoria from "../commons/BotonCategoria";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Agregar = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [productDescription, setDescription] = useState("");
  const [productPrecio, setPrecio] = useState();
  const [productoUrl, setProductoUrl] = useState();
  const [categoriaId, setCategoria] = useState();

  const handleSubmit = () => {
    axios
      .post(`/products`, {
        name: productName,
        price: productPrecio,
        description: productDescription,
        image: productoUrl,
        categoryId: categoriaId
      })
      .then((data) => {
        alert("Se ha Agregado el Producto");
        navigate("/");
      })
      .catch((err) => alert("Hubo un error verifica que todos los campos sean correctos"));
  };

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
            Agregar Productos
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl
                  onChange={(e) => setProductName(e.target.value)}
                  id="name"
                  isRequired
                >
                  <FormLabel>Nombre del Producto</FormLabel>
                  <Input type="text" placeholder="Nombre del Producto" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl onChange={(e) => setPrecio(e.target.value)} id="number" isRequired>
              <FormLabel>Precio del Producto</FormLabel>
              <Input type="number" placeholder="Precio del Producto" />
            </FormControl>
            <FormControl onChange={(e) => setDescription(e.target.value)} id="text" isRequired>
              <FormLabel>Descripcion Del Producto</FormLabel>
              <Input type="text" placeholder="Descripcion del Producto" />
            </FormControl>
            <FormControl onChange={(e) => setProductoUrl(e.target.value)} id="text" isRequired>
              <FormLabel>Imagen Del Producto</FormLabel>
              <Input type="url" placeholder="URL del Producto" />
            </FormControl>
            <FormControl onChange={(e) => setCategoria(e.target.value)} id="text" isRequired>
              <FormLabel>Categoria Del Producto</FormLabel>
              <BotonCategoria />
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
                Agregar Producto
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Agregar;
