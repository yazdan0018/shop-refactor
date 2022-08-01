import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { removeToken } from '../../../redux/modules/token';

const LOGIN_LINK = {
  path: '/login',
  name: 'login',
};

const LoginLogoutButton = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  const logout = () => {
    dispatch(removeToken());
  };

  return token ? (
    <Button
      type="button"
      onClick={logout}
      colorScheme="red"
    >
      Logout
    </Button>
  ) : (
    <Link
      as={RouterLink}
      key={LOGIN_LINK.path}
      to={LOGIN_LINK.path}
      textTransform="uppercase"
    >
      {LOGIN_LINK.name}
    </Link>
  );
};

export default LoginLogoutButton;
