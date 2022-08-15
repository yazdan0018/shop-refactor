import React from 'react';
import { LAYOUT_CONSTANTS } from '../constants';
import { Box, Spinner } from '@chakra-ui/react';

const CenteredSpinner = () => (
  <Box
    w="100%"
    minH={LAYOUT_CONSTANTS.MIN_HEIGHT}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Box>
);

export default CenteredSpinner;
