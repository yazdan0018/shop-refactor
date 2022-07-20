import React from 'react';
import { Link, Stack } from '@chakra-ui/react';
import { NAVBAR_LINKS } from '../../../constants';

const NavLinks = () => (
  <Stack
    spacing={8}
    direction="row"
    display={{ base: 'none', md: 'flex' }}
  >
    {NAVBAR_LINKS.map((link) => (
      <Link
        key={link.path}
        href={link.path}
        textTransform="uppercase"
      >
        {link.name}
      </Link>
    ))}
  </Stack>
);

export default NavLinks;
