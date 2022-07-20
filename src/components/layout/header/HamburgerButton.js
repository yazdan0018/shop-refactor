// @flow

import React from 'react';
import { Box } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

type Props = {
  onToggle: () => void,
};

const HamburgerButton = ({ onToggle }: Props) => {
  return (
    <Box
      display={{ base: 'flex', md: 'none' }}
      onClick={onToggle}
      cursor="pointer"
    >
      <GiHamburgerMenu size="25px" />
    </Box>
  );
};

export default HamburgerButton;
