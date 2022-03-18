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
  Select,
  Input,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";

function BuyFinalize({ id, num }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const art = useSelector((state) => state.cart);

  const total = art.reduce((acc, item) => {
    return !num
      ? (acc += item.product.price * item.quantity)
      : (acc += item.product.price * num);
  }, 0);

  const onSubmit = (data) => {
    console.log(data);
    axios.post("/order/confirm", data);
    return toast({
      title: "La compra se realizo correctamente!",
      description: "Para verla dirijase a su historial de compras",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const idCant = () => {
    axios.put("/cart", {
      quantity: num,
      cartItemId: id,
    });
    onOpen();
  };

  return (
    <>
      <Button onClick={idCant}>Continuar compra</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalHeader>Orden Completa</ModalHeader>
        <ModalContent>
          <Box>
            <Table variant="simple">
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
              {art?.map((artI) => {
                return (
                  <>
                    <Tbody>
                      <Tr>
                        <Td>{artI.product.name}</Td>
                        <Td>{num ? num : artI.quantity}</Td>
                        <Td isNumeric> ${artI.product.price}</Td>
                        <Td isNumeric>
                          {" "}
                          $
                          {num
                            ? num * artI.product.price
                            : artI.quantity * artI.product.price}
                        </Td>
                      </Tr>
                    </Tbody>
                  </>
                );
              })}
              <Tfoot>
                <br></br>
                <Tr>
                  <Th color="black">TOTAL: </Th>
                  <Th color="black" isNumeric>
                    {" "}
                    ${total || ""}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </Box>
          <Th>Direccion de entrega</Th>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("address", {
                required: true,
                message: "Ingrese una direccion",
              })}
              placeholder="Ingrese la direccion de la entrega"
            />

            <Select
              {...register("payment", {
                required: true,
                message: "Escoja un metodo de pago",
              })}
              placeholder="Seleccione un metodo de pago"
            >
              <option value="Mercado Pago">Mercado Pago</option>
              <option value="Tarjeta de Debito">Tarjeta de Debito</option>
              <option value="Tarjeta de Credito">Tarjeta de Credito</option>
              <option value="Pago facil">Pago facil</option>
            </Select>

            <Button type="submit">Confirmar Pedido</Button>
            <br></br>
          </form>

          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>

          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BuyFinalize;
