import React, { useState } from "react";
import {useSelector } from "react-redux";
import axios from 'axios'

import {
  Box,
  FormLabel,
  chakra,
  Textarea,
  FormControl,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function FormReviews({id}) {
  const usuario = useSelector((state) => state.user);
 
  const [vote, setVote] = useState("");
  const [description, setDescription] = useState("");


  const handleVoteChange = (e) => {
    setVote(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/reviews", {
        vote: vote,
        description: description,
        productId: id,
        userId: usuario.id,
      })
      .then((respuesta) => respuesta.data)
      .then((review) => console.log(review))
      .catch((err) => console.log("error", err));
  };

  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={5}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <Box>
        <form onSubmit={handleSubmit}>
          <chakra.h3
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"grey"}
          >
            Qué te pareció el producto?
          </chakra.h3>
          <Input
            onChange={handleVoteChange}
            value={vote}
            placeholder="Puntuación (del 1 al 5)"
            type="text"
          />
         
          <Textarea
          mt={4}
            onChange={handleDescriptionChange}
            value={description}
            placeholder="Descripción"
          />

          <Button mt={4} colorScheme="teal" type="submit">
            Enviar
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
