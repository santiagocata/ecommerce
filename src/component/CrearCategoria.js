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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CrearCategoria = () => {
  const navigate = useNavigate();
  const [categoriName, setCategoriName] = useState("");

  const handleSubmit = () => {
    axios
      .post(`/categories`, {
        name: categoriName,
      })
      .then((data) => {
        alert("Se ha Agregado la Categoria");
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
                Agregar Categoria
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CrearCategoria;
