import Boton from "../commons/Boton";
import { Link as Linked } from "react-router-dom";
import Error from "../component/Error";
import store from "../state/store";
import { useSelector } from "react-redux";
import {
  Flex,
  Box,
  FormControl,
  PopoverTrigger,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Admin() {
  const useRol = useSelector((state) => state.user.rol);
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Panel de Admin</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} align={"center"}>
          <Stack spacing={4}>
            <FormControl id="text">
              <Linked to="/admin/agregar">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Agregar Producto
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/crearcategoria">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Administrar Categorias
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/editar">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Editar Producto
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/eliminar">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Eliminar Producto
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/orders">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Ver ordenes
                </Button>
              </Linked>
            </FormControl>
            {useRol === "superadmin" ? (
              <>
                <FormControl>
                  <Linked to="/admin/agregaradmin">
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Agregar Admin
                    </Button>
                  </Linked>
                </FormControl>
                <FormControl>
                  <Linked to="/admin/deleteadmin">
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Eliminar Admin
                    </Button>
                  </Linked>
                </FormControl>
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Admin;
