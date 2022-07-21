import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const NotFound = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    pt={8}
  >
    <Heading size="xl">404, Not found</Heading>
  </Box>
);

export default NotFound;
