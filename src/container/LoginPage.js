import React, { useEffect } from 'react';
import {
  Container,
  Input,
  Button,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginUser } from '../redux/modules/login';
import { useForm } from 'react-hook-form';
import { LAYOUT_CONSTANTS } from '../constants';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(store => store.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  useEffect(() => {
    if (error) {
      setError('formError', {
        type: 'custom',
        message: 'Username or password is incorrect',
      });
    }
  }, [error, setError]);

  const onSubmit = () => {
    const fakeData = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    dispatch(loginUser(fakeData));
  };

  return (
    <Container
      maxW={{ base: '100%', md: 'md' }}
      centerContent
      pt={10}
      minH={LAYOUT_CONSTANTS.MIN_HEIGHT}
    >
      <Heading mb={10}>Please login</Heading>
      <VStack spacing={10} w="100%">
        <VStack spacing={4} w="100%">
          <Input
            type="email"
            isInvalid={errors?.email}
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors?.email?.message && (
            <Text
              size="2xl"
              fontWeight="bold"
              color="red.500"
            >
              {errors.email.message}
            </Text>
          )}
        </VStack>
        <Input
          type="password"
          isInvalid={errors?.password}
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          colorScheme="blue"
          w={{ base: '100%', md: '70%' }}
        >
          Login
        </Button>
        {errors?.formError?.message && (
          <Text
            size="2xl"
            fontWeight="bold"
            color="red.500"
          >
            {errors.formError.message}
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default LoginPage;
