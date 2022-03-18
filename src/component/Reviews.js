import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import {useSelector } from "react-redux";

  function Rating({ rating}: RatingProps) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
      
      </Box>
    );
  }
  
  
  interface TestimonialCardProps {
   id: string;
   description: string;
   vote: String;
   user: string;
  
  }
  
  function TestimonialCard(props: TestimonialCardProps) {
    const { id, description, user, vote} = props;
    const usuario = useSelector((state) => state.user);
 

    return (
      
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={15}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {description}
          </chakra.p>
          <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {user.name + ' ' + user.lastName}
           
            <chakra.span
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.500'}>
              {' '}
          
            </chakra.span>
          </chakra.p>
          <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={vote}  />
            </Flex>
        </Flex>
      </Flex>
    );
  }
  
  export default function Reviews() {

    const reviews = useSelector((state) => state.reviews);
    const {id} = useParams()
    let revProd = [];

    reviews.map((review) => {
      if(review.productId == id){
        revProd.push(review)
      }
    })

    return (
      <Flex
        textAlign={'center'}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'grey'}>
            Reseñas
          </chakra.h3>
          <chakra.h1
            py={1}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Opiniones destacadas
          </chakra.h1>
         
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mx={'auto'}>
          {revProd?.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
          
        </SimpleGrid>
        <Box>
            <br/>
            <br/>
            <br/>
            <br/>
        </Box>
      </Flex>
    );
  }