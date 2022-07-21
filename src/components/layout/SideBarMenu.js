import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { NAVBAR_LINKS } from '../../constants';
import { Link as RouterLink } from 'react-router-dom';

const SideBarMenu = () => (
  <Box
    display="flex"
    flexDir="column"
    alignItems="center"
    pt={5}
    w="70vw"
    h="100%"
    bg="white"
  >
    {NAVBAR_LINKS.map((link) => (
      <Link
        as={RouterLink}
        key={link.name}
        to={link.path}
        textTransform="uppercase"
      >
        {link.name}
      </Link>
    ))}
  </Box>
);

export default SideBarMenu;
