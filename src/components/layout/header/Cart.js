import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { removeToken } from '../../../redux/modules/token';

const CART_LINK = {
  path: '/cart',
  name: 'cart',
};

const Cart = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  return token ? (
    <Link
      as={RouterLink}
      key={CART_LINK.path}
      to={CART_LINK.path}
      textTransform="uppercase"
    >
      {CART_LINK.name}
    </Link>
  ) : (
    <></>
  );
};

export default Cart;
