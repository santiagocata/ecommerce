import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
import FormReviews from "./FormReviews";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Input,
  useToast
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";

export default function Simple() {
  const usuario = useSelector((state) => state.user);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cant, setCant] = useState("");
  const toast = useToast()

  const handlerCant = (e) => {
    const cantN = parseInt(e.target.value);
    setCant(cantN);
  };
  console.log(cant);

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("/cart", {
      productId: id,
      quantity: cant,
    });
    return (
    toast({
          title: 'El producto ha sido agregado al carrito exitosamente!',
          description: "Para finalizar la compra dirijase a el",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
    )
  };
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((result) => result.data)
      .then((producto) => setProduct(producto))
      .catch((err) => console.log(err));
  }, {});

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "500px", lg: "700px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              <h2>{product.name}</h2>
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{product.description}</Text>
            </VStack>
          </Stack>

          <Button
            onClick={handleClick}
            rounded={"none"}
            w={"full"}
            mt={5}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Agregar al carrito
          </Button>

          <Flex justifyContent="space-between" alignContent="center"></Flex>

          <Text fontSize={"lg"}>Cantidad:</Text>
          <Input onChange={handlerCant}></Input>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 días hábiles de entrega</Text>
          </Stack>
          {usuario.id ? <FormReviews id={id} /> : <></>}
        </Stack>
      </SimpleGrid>

      <Reviews />
    </Container>
  );
}
