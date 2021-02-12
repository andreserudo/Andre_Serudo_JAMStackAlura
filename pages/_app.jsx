import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes';
import GlobalStyle from '../src/themes/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Fira+Sans:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
