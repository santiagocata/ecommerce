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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router";

const DeleteAdmins = () => {
  const [id, setId] = useState("");
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate()

  const handleAdmin = () => {
    axios
      .put("/users/setadmin", { id: id, newRol: "user" })
      .then((data) => {
        alert("Se eliminó el admin");
        navigate("/admin");
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios.get(`/users/list`).then((users) => {
      setUsersList(users.data);
    });
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Eliminar Adminstradores
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl
              id="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
              isRequired
            >
              <FormLabel>Seleccionar el usuario</FormLabel>
              <Select placeholder="Seleccionar el User">
                {usersList?.map((user, i) => {
                  if (user.rol === "admin")
                    return (
                      <option key={i} value={user.id}>
                        {user.email}
                      </option>
                    );
                })}
              </Select>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleAdmin}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Eliminar Admin
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default DeleteAdmins;
