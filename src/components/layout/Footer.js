import React from 'react';
import { Box } from '@chakra-ui/react';
import { LAYOUT_CONSTANTS } from '../../constants';

const Footer = () => (
  <Box
    w="100%"
    bg="white"
    borderTop="1px"
    borderColor="black"
    h={LAYOUT_CONSTANTS.HEADER_HEIGHT}
  >
    Created by yazdan
  </Box>
);

export default Footer;
