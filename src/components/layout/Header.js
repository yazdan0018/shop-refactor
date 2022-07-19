// @flow

import React from 'react';
import { Box, Link, Stack } from '@chakra-ui/react';
import { LAYOUT_CONSTANTS } from '../../constants';

const Header = () => (
  <Box
    position="fixed"
    h={LAYOUT_CONSTANTS.HEADER_HEIGHT}
    w="100%"
    left={0}
    top={0}
    borderBottom="1px"
    borderColor="black"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    px={10}
  >
    <span>hi</span>
    <Stack spacing={8} direction="row">
      <Link>Login</Link>
      <Link>Shop</Link>
      <Link>Home</Link>
    </Stack>
  </Box>
);

export default Header;
