import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadProduct,
  loadProductSuccess,
} from '../redux/modules/product';
import CenteredSpinner from '../components/CenteredSpinner';

const Product = props => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, loaded, data } = useSelector(
    store => store.product,
  );
  const allProducts = useSelector(store => store.products);

  useEffect(() => {
    const productById = allProducts.data.find(
      prd => prd.id === Number(id),
    );
    if (!productById) {
      dispatch(loadProduct({ id }));
    } else {
      dispatch(loadProductSuccess(productById));
    }
  }, [allProducts.data, dispatch, id]);

  if (loading && !loaded) {
    return <CenteredSpinner />;
  }

  return <Box>{data?.id ? data.id : null}</Box>;
};

export default Product;
