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
  Select,
  Table,
  TableCaption,
  Tr,
  Th,
  Tbody,
  Thead,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

import { useNavigate } from "react-router";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`/order/all`).then((orders) => {
      setOrders(orders.data);
    });
  }, []);

  return (
    <Table variant="simple">
      <TableCaption>Ordenes de compra</TableCaption>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Payment</Th>
          <Th>Adress</Th>
          <Th>Status</Th>
          <Th>Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders?.map((order) => {
          return (
            <Tr>
              <Td isNumeric>{order.id}</Td>
              <Td>{order.payment}</Td>
              <Td>{order.address}</Td>
              <Td>{order.state}</Td>
              <Td isNumeric>{order.total}</Td>
            </Tr>
          );
        })}
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

export default OrdersAdmin;
