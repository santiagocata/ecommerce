import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  MenuItem,
  useDisclosure,
  Center,
  Stat,
  StatHelpText,
  StatNumber,
  Th,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FullOrder from "../commons/FullOrder";
import { useSelector } from "react-redux";
import axios from "axios";

function OrdersHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const usuario = useSelector((state) => state.user);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`/order/history`)
      .then((res) => res.data)
      .then((cart) => setOrders(cart))
      .catch((err) => console.log("Error", err));
  }, []);

  // const orderss = [
  //   {
  //     id: "453298",
  //     total: "380",
  //     state: "completa",
  //     date: "10/03/2022",
  //     products: [
  //       { id: "3", name: "Surfboard", price: "240", quantity: "2" },
  //       { id: "4", name: "Helmet", price: "150", quantity: "1" },
  //     ],
  //   },
  //   {
  //     id: "453300",
  //     total: "480",
  //     state: "completa",
  //     date: "15/03/2022",
  //     products: [
  //       { id: "8", name: "Bicicleta", price: "270", quantity: "1" },
  //       { id: "9", name: "Carpa", price: "160", quantity: "1" },
  //     ],
  //   },
  // ];

  return (
    <>
      <MenuItem onClick={onOpen}>Historial de pedidos</MenuItem>
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
            Historial de pedidos
          </DrawerHeader>
          <DrawerBody>
            <br></br>
            {orders?.map((order, i) => (
              <Stat>
                <Center>
                  <Th>N de orden: {order.id}</Th>
                </Center>
                <Center>
                  <StatNumber>$ {order.total}</StatNumber>
                </Center>
                <Center>
                  <StatHelpText>Estado: {order.state}</StatHelpText>
                </Center>
                <FullOrder order={order} />
              </Stat>
            ))}
            <Divider orientation="horizontal" />
            <br></br>
          </DrawerBody>
          <br></br>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default OrdersHistory;
