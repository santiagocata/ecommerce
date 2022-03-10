import axios from "axios";
import useInput from "../hooks/hook";
import { useState } from "react";
import { useForm } from "react-hook-form";
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

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const hookEmail = useInput();
  const hookPassword = useInput();
  const handleShowClick = () => setShowPassword(!showPassword);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (value) =>{
  axios.post("api/login",value)
  console.log(value);
}

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
        <Avatar bg="blue.500" />
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
                    {...register("email",{required:true})}
                    type="email"
                    placeholder="email address"
                    />
                    
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    {...register("password",{required:true})}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Esconder" : "Mostrar"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* <FormHelperText textAlign="right">
                  <Link>recuperar contraseña?</Link>
                </FormHelperText> */}
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
        <Link color="blue.500" href="/Registro">
          Registrarse
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;