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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BotonCategoria from "../commons/BotonCategoria";

const CrearCategoria = () => {
  const navigate = useNavigate();
  const [categoriName, setCategoriName] = useState("");

  const [toDelete, setToDelete] = useState("");

  const [editCategoria, setEditCategoria] = useState("");
  const [categoriaId, setCategoriaId] = useState();

  const handleSubmitAgregar = () => {
    axios
      .post(`/categories`, {
        name: categoriName,
      })
      .then((data) => {
        alert("Se ha Agregado la Categoria");
        navigate("/");
      })
      .catch((err) =>
        alert("Hubo un error verifica que todos los campos sean correctos")
      );
  };

  const handleSubmit = () => {
    axios
      .delete(`/categories/${toDelete}`)
      .then((data) => {
      alert("Se ha eliminado la categoria")
      navigate("/")
      })
      .catch((err) => alert(err))
  };

  // useEffect(() => {
  //   axios.get(`/categories/${toDelete}`).then((categoria) => {
  //     setToDelete(categoria.data)
  //   });
  // }, []);

  const handleSubmitEditar = () => {
    axios
      .put(`/categories`, {
        categoryId:categoriaId,
        newCategoryName: editCategoria,
      })
      .then((data) => {
        alert("Se ha Modificado la Categoria");
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios.get(`/categories`).then((categorias) => {
      setEditCategoria(categorias.data.name)
    });
  }, []);

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
            Agregar Categorias
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
                  onChange={(e) => setCategoriName(e.target.value)}
                  id="name"
                >
                  <FormLabel>Nombre de la Categoria</FormLabel>
                  <Input type="text" placeholder="Categoria para Agregar" />
                </FormControl>
              </Box>
            </HStack>
            <Button
                onClick={() => handleSubmitAgregar()}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Agregar Categoria
              </Button>
            <FormControl
              onChange={(e) => setToDelete(e.target.value)}
              id="name"
            >
              <FormLabel>Eliminar Categoria</FormLabel>
              <BotonCategoria />
            </FormControl>
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
                Eliminar Categoria
              </Button>
            <FormControl
            onChange={(e) => setCategoriaId(e.target.value)}
              id="name"
            >
              <FormLabel>Seleccione Categoria a editar </FormLabel>
              <BotonCategoria  />
              <Input value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} type="text" placeholder="Ingresa la nueva Categoria" />
            </FormControl>
              <Input onChange={(e) => setEditCategoria(e.target.value)} type="text" placeholder="Ingresa la nueva Categoria" />

            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => handleSubmitEditar ()}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Eitar categoria
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CrearCategoria;
