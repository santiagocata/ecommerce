import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Carousel = () => {
  const [slider, setSlider] = React.useState("");
  //   <Slider | null>
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      title: "Camping",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://images.pexels.com/photos/5992142/pexels-photo-5992142.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      title: "Deportes acuáticos",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://images.pexels.com/photos/2103783/pexels-photo-2103783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      title: "Montaña",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      title: "Nieve",
      /* text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.", */
      image:
        "https://images.pexels.com/photos/8532484/pexels-photo-8532484.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards?.map((card, index) => (
          <Box
            key={index}
            height={"xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  borderRadius="xl"
                  backdropFilter="auto"
                  backdropBlur='8px'
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  position="relative"
                >
                  <Text align="center">{card.title}</Text>
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="black"
                  fontWeight="bold"
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
