import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Box,
  chakra,
  Textarea,
  Select,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function FormReviews({ id }) {
  const usuario = useSelector((state) => state.user);

  const [vote, setVote] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

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
      .then((respuesta) => {
        console.log("respuesta.data => ",respuesta.data)
        // respuesta.data
      })
      .then(() => {
        alert("Tu comentario fue posteado");
        navigate("/");
      })
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
     

          <Select  onChange={handleVoteChange} placeholder="Puntuación (del 1 al 5)">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Select>

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
