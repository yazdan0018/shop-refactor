// @flow

import React from 'react';
import {
  Box,
  Image,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
};

type Props = {
  product: Product,
} & BoxProps;

const ProductCard = ({ product, ...rest }: Props) => {
  return (
    <Box
      to={`/product/${product.id}`}
      as={Link}
      display="flex"
      p="1rem"
      w="100%"
      maxW={{ base: '100%', md: '200px' }}
      flexDir="column"
      boxShadow="lg"
      justifyContent="space-between"
      {...rest}
    >
      <Image
        mb="1rem"
        src={product.image}
        alt={product.title}
        objectFit="contain"
        h="200px"
      />
      <Box flexDir="column">
        <Text fontSize="md" mb="1rem" textDecoration="none">
          {product.title}
        </Text>
        <Text
          fontSize="sm"
          color="gray.400"
          textDecoration="none"
        >
          Price :{' '}
        </Text>
        <Text textDecoration="none">{product.price}$</Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
