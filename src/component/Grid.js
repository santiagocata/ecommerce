import { SimpleGrid, GridItem } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import React from "react";
import ProductAddToCart from "../commons/ProductAddToCart";

function GridGeneral() {
  const products = [
    {
      name: "Tabla de Surf",
      img: "https://images.pexels.com/photos/9259563/pexels-photo-9259563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: 3000,
      rating: 4,
    },
    {
      name: "Kayak",
      img: "https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: 5000,
      rating: 3.5,
    },
    {
      name: "Casco",
      img: "https://images.pexels.com/photos/4992710/pexels-photo-4992710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: 2000,
      rating: 4.5,
    },
    {
      name: "Bicicleta",
      img: "https://images.pexels.com/photos/133697/pexels-photo-133697.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: 7000,
      rating: 3,
    },
    {
      name: "Tabla de Surf",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySnoQjUDG8p5n5Tl8IXIaMkutCoP5RGLlQw&usqp=CAU",
      price: 3000,
      rating: 4,
    },
    {
      name: "Kayak",
      img: "https://images.pexels.com/photos/3413678/pexels-photo-3413678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: 5000,
      rating: 3.5,
    },
    {
      name: "Casco",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrrK7nQhC5IRqp5rkeZuyX3f3HHa7Pn-9MA&usqp=CAU",
      price: 2000,
      rating: 4.5,
    },
    {
      name: "Bicicleta",
      img: "https://i.pinimg.com/236x/bc/5a/9b/bc5a9b4786696175326748eff31a4361.jpg",
      price: 7000,
      rating: 3,
    },
  ];

  return (
    <SimpleGrid spacing="30px" minChildWidth="300px">
      {products?.map((product, i) => (
        // {/* <Link to=''> */}
        <ProductAddToCart key={i} data={product} />
        // {/* </Link> */}
      ))}
    </SimpleGrid>
  );
}

export default GridGeneral;
