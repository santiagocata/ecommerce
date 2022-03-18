import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Divider,
  Button,
  Flex,
  Square,
  Box,
  Image,
  Th,
  StatNumber,
  DrawerFooter,
  DrawerBody,
} from "@chakra-ui/react";
import { setCart } from "../state/cart";
import { FiShoppingCart } from "react-icons/fi";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const art = useSelector((state) => state.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [newData, setNewData] = useState({});

  useEffect(() => {
    axios
      .get("/cart")
      .then((cartItem) => cartItem.data)
      .then((arti) => dispatch(setCart(arti)));
  }, [newData]);

  const handleDelete = (id) => {
    axios
      .delete(`/cart/${id}`)

      .then((data) => setNewData(data));
  };

  const getCart = async () => {
    onOpen();
    const cart = await axios.get("/cart");
    dispatch(setCart(cart.data));
  };

  return (
    <>
      <Button
        onClick={getCart}
        variant={"solid"}
        colorScheme={"blue"}
        size={"sm"}
        mr={4}
      >
        <FiShoppingCart />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="5px">
            Carrito de compras
          </DrawerHeader>

          <br></br>
          <DrawerBody>
            {art?.map((artI) => {
              return (
                <>
                  <Flex color="white">
                    <Center w="100px">
                      <Image
                        boxSize="100px"
                        objectFit="cover"
                        src={artI.product.image}
                        alt="Dan Abramov"
                      />
                    </Center>
                    <Square size="150px">
                      <Th color="Black">
                        {artI.product.name}
                        <br></br>
                        Cantidad:{artI.quantity}
                        <br></br>
                        <Button onClick={(e) => handleDelete(artI.id)}>
                          <DeleteIcon />
                        </Button>
                      </Th>
                    </Square>
                    <Center>
                      <Box flex="1">
                        <StatNumber color="black">
                          <Th>${artI.quantity * artI.product.price}</Th>
                        </StatNumber>
                      </Box>
                    </Center>
                  </Flex>
                  <br></br>
                  <Divider orientation="horizontal" />
                </>
              );
            })}
          </DrawerBody>
          <DrawerFooter>
            <Button>Continuar compra</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
