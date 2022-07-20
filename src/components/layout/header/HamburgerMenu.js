// @flow

import React from 'react';
import { Box } from '@chakra-ui/react';
import { RiCloseFill } from 'react-icons/ri';
import SideBarMenu from '../SideBarMenu';

type Props = {
  isOpen: boolean,
  onToggle: () => void,
};

const HamburgerMenu = ({ isOpen, onToggle }: Props) => {
  return (
    <Box
      position="fixed"
      zIndex={100}
      right={isOpen ? 0 : `-100vw`}
      transition="right 300ms linear"
      w="100%"
      h="100%"
      bg="rgba(0,0,0,.7)"
      display="flex"
      justifyContent="space-between"
    >
      <Box p={5} onClick={onToggle} w="30vw" h="100%">
        <RiCloseFill size="40px" color="white" />
      </Box>
      <SideBarMenu />
    </Box>
  );
};

export default HamburgerMenu;
