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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";



const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function WithAction() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handeLogOut = () =>{
    axios.post("/logout")
    .then(() => {
      dispatch(setUser({}))
      navigate("/")
    })
  } 

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
          <HStack spacing={8} alignItems={"center"}>
            <Link to='/'>
            <Box size={"lg"}>Productos</Box>
            </Link>
            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
      
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box>
              <Button variant={"solid"} colorScheme={"blue"} size={"sm"} mr={4}>
                <FiShoppingCart />
              </Button>
            </Box>

            <Menu>
              {usuario.id ? <>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar bg={"blue.500"} size={"sm"} src={""} />
                <p>{usuario.name}</p>
              </MenuButton> </> : <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}><Avatar size={"sm"} src={""} /> </MenuButton>}
              {usuario.id ? (
                <MenuList>
                  <MenuItem>Configuración</MenuItem>
                  <MenuItem>Historial</MenuItem>
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
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
