import { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Box, Image, Icon, chakra, Tooltip } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function Rating({ rating }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function ProductAddToCart({ data }) {
  
  const [rating, setRating] = useState([]);
  useEffect(() => {
    axios
      .get(`/reviews/${data.id}`)
      .then((res) => res.data)
      .then((rev) => {
        setRating(rev);
      })
      .catch((err) => console.log(err));
  }, []);

  let suma = 0;
  for (let i = 0; i < rating.length; i++) {
    suma += rating[i].vote;
  }

  if (rating.length != 0) {
    let promedio = suma / rating.length;

    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            w="300px"
            h="300px"
            src={data.image}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={promedio} />
              <Box fontSize="1xl">
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  } else {
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            w="300px"
            h="300px"
            src={data.image}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Flex justifyContent="space-between" alignContent="center">
              <Box d="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => {
                    return <BsStar key={i} style={{ marginLeft: "1" }} />;
                  })}
              </Box>

              <Box fontSize="1xl">
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default ProductAddToCart;


