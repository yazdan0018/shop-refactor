import React, { useEffect } from 'react';
import {
  Container,
  Spinner,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/modules/products';
import ProductCard from '../components/ProductCard';
import CenteredSpinner from '../components/CenteredSpinner';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { loading, loaded, data } = useSelector(
    store => store.products,
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading && !loaded) {
    return <CenteredSpinner />;
  }

  return (
    <Container maxW="100%" centerContent py={10}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
      >
        {data.length ? (
          data.map(product => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))
        ) : (
          <span>No data found</span>
        )}
      </SimpleGrid>
    </Container>
  );
};

export default ProductsPage;
