import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { NAVBAR_LINKS } from '../../constants';

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
        key={link.name}
        href={link.path}
        textTransform="uppercase"
      >
        {link.name}
      </Link>
    ))}
  </Box>
);

export default SideBarMenu;
