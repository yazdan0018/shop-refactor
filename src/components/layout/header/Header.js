// @flow

import React, { useEffect } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { LAYOUT_CONSTANTS } from '../../../constants';
import { AiFillAmazonCircle } from 'react-icons/ai';
import NavLinks from './NavLinks';
import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [location, onClose]);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} onToggle={onToggle} />
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
        <AiFillAmazonCircle size="30px" />
        <NavLinks />
        <HamburgerButton onToggle={onToggle} />
      </Box>
    </>
  );
};

export default Header;
