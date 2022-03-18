import { Link as Linked } from "react-router-dom";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router";
import { useEffect } from "react";

const IMAGE =
  "https://josefacchin.com/wp-content/uploads/2018/09/error-404-http-not-found.png";
export default function ProductSimple() {
  const navigate = useNavigate();

 /*  useEffect(() => {
    navigate("/404");
  }, []); */

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={280}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Error
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            404 Not Found
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Linked to="/">
              <Button
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
                color="white"
                variant="solid"
              >
                Volver al Inicio
              </Button>
            </Linked>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
