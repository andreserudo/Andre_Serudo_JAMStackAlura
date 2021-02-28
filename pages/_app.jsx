import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { breakpoints, colorPallet } from '../src/themes';
import { typographyVariants } from '../src/themes/typographyVariants';
import GlobalStyle from '../src/themes/GlobalStyle';
import Provider from '../src/context/Provider';
import useTheme from '../src/hooks/useTheme';

export default function App({ Component, pageProps }) {
  // const valor = useContext(LanguageContext);
  /// const [themeContent, setThemeContent] = useState({});
  // console.log('theme: ', pageTheme);
  const [currentTheme] = useTheme();

  // eslint-disable-next-line no-unused-vars
  const [pageTheme, setPageTheme] = useState(
    {
      ...typographyVariants,
      ...breakpoints,
      ...colorPallet.filter((item) => item.theme === currentTheme)[0],
    },
  );

  return (
    <>
      <Head>
        <title>André Serudo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Fira+Sans:wght@100;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Provider>
        <ThemeProvider theme={pageTheme}>
          <Component pageProps={pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
