import React from 'react';
import { Link, Stack } from '@chakra-ui/react';
import { NAVBAR_LINKS } from '../../../constants';
import { Link as RouterLink } from 'react-router-dom';
import LoginLogoutButton from './LoginLogoutButton';
import Cart from './Cart';

const NavLinks = () => {
  return (
    <Stack
      spacing={8}
      direction="row"
      display={{ base: 'none', md: 'flex' }}
      alignItems="center"
    >
      {NAVBAR_LINKS.map(link => (
        <Link
          as={RouterLink}
          key={link.path}
          to={link.path}
          textTransform="uppercase"
        >
          {link.name}
        </Link>
      ))}
      <LoginLogoutButton />
      <Cart />
    </Stack>
  );
};

export default NavLinks;
