import React from 'react';
import Header from './header/Header';
import AppContainer from './AppContainer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <AppContainer>{children}</AppContainer>
    </>
  );
};

export default Layout;
