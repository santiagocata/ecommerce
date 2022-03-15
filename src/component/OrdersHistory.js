import {
  Drawer,
  DrawerBody,
  DrawerFooter,
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
import React from "react";
import FullOrder from "../commons/FullOrder";

function OrdersHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
            <Stat>
              <Center>
                <Th>N de orden</Th>
              </Center>
              <Center>
                <StatNumber>$0.00</StatNumber>
              </Center>
              <Center>
                <StatHelpText>Estado</StatHelpText>
              </Center>
              <FullOrder />
            </Stat>
            <br></br>
            <Divider orientation="horizontal" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default OrdersHistory;
