import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as Linked, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";
import React, { useEffect, useState } from "react";
import store from "../state/store";
import OrdersHistory from "./OrdersHistory";
import Cart from "./Cart";
import SearchInput from "./Search";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export default function WithAction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const useRol = useSelector((state) => state.user.rol);
  const [categories, setCategories] = useState([]);


 

  useEffect(() => {
    axios
      .get("/categories")
      .then((result) => result.data)
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  const handeLogOut = () => {
    axios.post("/logout").then(() => {
      dispatch(setUser({}));
      navigate("/");
    });
  };

  const usuario = useSelector((state) => state.user);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={4}
          w="100%"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"}>
            <Linked to="/">
              <HStack>
                <Box boxSize="40px">
                  <Image
                    boxSize="40px"
                    src={require("../assets/img/pngwing.com.png")}
                  />
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    React Sport
                  </Text>
                </Box>
              </HStack>
            </Linked>

            <HStack
              as={"nav"}
              pl={8}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="blue"
                  rightIcon={<ChevronDownIcon />}
                >
                  Categorías
                </MenuButton>
                <MenuList>
                  {categories?.map((category) => {
                    return (
                      <Linked to={`/categories/${category.id}`}>
                        <MenuItem fontSize="xl" fontWeight="bold">
                          {category.name}
                        </MenuItem>
                      </Linked>
                    );
                  })}
                </MenuList>
              </Menu>
              {useRol === "superadmin" || useRol === "admin" ? (
                <Linked to="/admin">
                  <Menu>
                    <MenuButton
                      as={Button}
                      colorScheme="blue"
                      rightIcon={<EditIcon />}
                    >
                      Panel Admin
                    </MenuButton>
                  </Menu>
                </Linked>
              ) : (
                <></>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <SearchInput />
            </Flex>
            <Box>
              <Cart />
            </Box>

            <Menu>
              {usuario.id ? (
                <>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar bg={"blue.500"} size={"sm"} src={""} />
                    <p>{usuario.name}</p>
                  </MenuButton>{" "}
                </>
              ) : (
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={""} />{" "}
                </MenuButton>
              )}
              {usuario.id ? (
                <MenuList>
                  <Linked to="/configuracion">
                    <MenuItem>Configuración</MenuItem>
                  </Linked>
                  <OrdersHistory />
                  <MenuItem onClick={handeLogOut}>Cerrar Sesión</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <Linked to="login">
                    <MenuItem>Iniciar Sesión</MenuItem>
                  </Linked>
                  <Linked to="register">
                    <MenuItem>Registrarse</MenuItem>
                  </Linked>
                </MenuList>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="blue"
                  rightIcon={<ChevronDownIcon />}
                >
                  Categorías
                </MenuButton>
                <MenuList>
                  {categories?.map((category) => {
                    return (
                      <Linked to={`/categories/${category.id}`}>
                        <MenuItem fontSize="xl" fontWeight="bold">
                          {category.name}
                        </MenuItem>
                      </Linked>
                    );
                  })}
                </MenuList>
              </Menu>
              <SearchInput />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
