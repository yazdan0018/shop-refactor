import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/modules/cart';

const Cart = () => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  console.log(cart);
  return (
    <>
      {cart.length > 0
        ? cart.map((item, idx) => (
            <div key={idx}>
              <span>{item.title}</span>
              <span> ({item.quantity})</span>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item));
                }}
              >
                x
              </button>
            </div>
          ))
        : 'empty'}
    </>
  );
};

export default Cart;
