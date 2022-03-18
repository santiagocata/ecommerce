import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  Image,
  Icon,
  chakra,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  const reviews = useSelector((state) => state.reviews);

  const [rating, setRating] = useState([]);
  const toast = useToast();
  useEffect(() => {
    axios
      .get(`/reviews/${data.id}`)
      .then((res) => res.data)
      .then((rev) => {
        setRating(rev);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    axios.post("/cart", {
      productId: data.id,
      quantity: 1,
    });
    return toast({
      title: "El producto ha sido agregado al carrito exitosamente!",
      description: "Para finalizar la compra dirijase a el",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  let suma = 0;
  let i = 0;

  reviews.map((review) => {
    if (review.productId == data.id) {
      suma += review.vote;
      i++;
    }
  });

  if (i != 0) {
    let promedio = suma / i;

    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Link to={`/products/${data.id}`}>
            <Image
              w="300px"
              h="300px"
              src={data.image}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
            />
          </Link>

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Link to={`/products/${data.id}`}>
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {data.name}
                </Box>
              </Link>
              <div onClick={handleClick}>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a display={"flex"}>
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                    />
                  </chakra.a>
                </Tooltip>
              </div>
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
