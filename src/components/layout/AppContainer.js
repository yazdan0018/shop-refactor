import React from 'react';
import { Box } from '@chakra-ui/react';
import { LAYOUT_CONSTANTS } from '../../constants';
import Footer from './Footer';

const AppContainer = ({ children }) => (
  <Box
    zIndex={1}
    bg="white"
    position="fixed"
    top={LAYOUT_CONSTANTS.HEADER_HEIGHT}
    left={0}
    w="100vw"
    minH={`calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`}
    maxH={`calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`}
    h={`calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`}
    overflow="auto"
  >
    <Box
      w="100%"
      minH={`calc(100vh - ${
        2 * LAYOUT_CONSTANTS.HEADER_HEIGHT.split('px')[0]
      }px)`}
    >
      {children}
    </Box>
    <Footer />
  </Box>
);

export default AppContainer;
