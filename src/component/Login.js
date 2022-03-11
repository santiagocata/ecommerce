import axios from "axios";
import { setUser } from "../state/user";
import { Link as Linked } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("/login", data)
      .catch((error) => alert("Ingresa un Email o Contraseña Valida"))
      .then((user) => {
        dispatch(setUser(user.data), navigate("/"));
      });
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="" />
        <Heading color="blackAlpha.800">Iniciar sesion</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Ingrese un email valido",
                      },
                    })}
                    type="email"
                    placeholder="email address"
                  />
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => <p>{message}</p>}
                />
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    {...register("password", { required: true, minLength: 8 })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />

                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Esconder" : "Mostrar"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => <p>Ingrese una Contraseña valida</p>}
                />
              </FormControl>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Iniciar
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Eres nuevo?{" "}
        <Linked to="/register">
          <Link color="blue.500">Registrarse</Link>
        </Linked>
      </Box>
    </Flex>
  );
};

export default Login;
