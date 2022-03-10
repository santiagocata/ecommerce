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
    Link,
  } from "@chakra-ui/react";
  
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  import useInput from "../Hooks/hook";
  import axios from "axios";
  import { useForm } from "react-hook-form";
  import { useNavigate } from "react-router-dom";
  
  const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      axios.post("api/users", data).then(() => navigate("/"));
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Registrate
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Nombre </FormLabel>
                      <Input
                        {...register("name", { required: true })}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Apellido</FormLabel>
                      <Input
                        {...register("alastName", { required: true })}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="adress" isRequired>
                  <FormLabel>Direccion</FormLabel>
                  <Input
                    {...register("adress", { required: true })}
                    type="text"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...register("email", { required: true})}
                    type="email"
                  />
                </FormControl>
  
                <FormControl id="password" isRequired>
                  <FormLabel>Contraseña</FormLabel>
                  <InputGroup>
                    <Input
                      {...register("password", { required: true, minLength:8 })}
                  
                      type={showPassword ? "text" : "password"}
                    />
                    {errors.password&&<span>Se esperan al menos 8 caracteres</span>}
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Completar registro
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Ya estas registrado ?{" "}
                    <Link href="/login" color={"blue.400"}>
                      Iniciar sesion
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    );
  };
  
  export default Register;