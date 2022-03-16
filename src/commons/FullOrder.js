import {
  Modal,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

function FullOrder({ order }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Detalles</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalHeader>Orden Completa</ModalHeader>
        <ModalContent>
          <Box>
            <Table variant="simple">
              <TableCaption color="black">
                Detalle de Orden {order.id}
              </TableCaption>
              <Thead>
                <Tr>
                  <Th color="black">Producto</Th>
                  <Th color="black">Cantidad</Th>
                  <Th color="black" isNumeric>
                    Precio unitario
                  </Th>
                  <Th color="black" isNumeric>
                    Precio total
                  </Th>
                </Tr>
                <br></br>
              </Thead>
              {order.products?.map((product, i) => (
                <Tbody>
                  <Tr>
                    <Td>{product.name}</Td>
                    <Td>{product.quantity}</Td>
                    <Td isNumeric> ${product.price}</Td>
                    <Td isNumeric> ${product.price * product.quantity}</Td>
                  </Tr>
                </Tbody>
              ))}
              <Tfoot>
                <br></br>
                <Tr>
                  <Th color="black">TOTAL: </Th>
                  <Th color="black" isNumeric>
                    {" "}
                    ${order.total}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </Box>

          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FullOrder;
