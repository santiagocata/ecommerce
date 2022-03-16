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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  StatNumber,
  DrawerFooter,
  DrawerBody,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import axios from "axios";

/* get /cart */
/* oost a cart */
/* /put/cart */
/* /delete/cart */

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   axios.get("/cart").then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Button
        onClick={onOpen}
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
            <Flex color="white">
              <Center w="100px">
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Center>
              <Square size="150px">
                <Th color="Black">
                  Nombre articulo
                  <br></br>
                  <NumberInput
                    maxW="80px"
                    defaultValue={1}
                    max={300}
                    clampValueOnBlur={false}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Th>
              </Square>
              <Center>
                <Box flex="1">
                  <StatNumber color="black">
                    <Th>$0.00</Th>
                  </StatNumber>
                </Box>
              </Center>
            </Flex>
            <br></br>
            <Divider orientation="horizontal" />

            <Flex color="white">
              <Center w="100px">
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Center>
              <Square size="150px">
                <Th color="Black">
                  Nombre articulo
                  <br></br>
                  <NumberInput
                    maxW="80px"
                    defaultValue={1}
                    max={300}
                    clampValueOnBlur={false}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Th>
              </Square>
              <Center>
                <Box flex="1">
                  <StatNumber color="black">
                    <Th>$0.00</Th>
                  </StatNumber>
                </Box>
              </Center>
            </Flex>
            <br></br>
            <Divider orientation="horizontal" />
          </DrawerBody>
          <DrawerFooter>
            <Button>Confirmar Pedido</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
