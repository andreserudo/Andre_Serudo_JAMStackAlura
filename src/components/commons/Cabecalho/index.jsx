import React, { useContext } from 'react';
import LanguageContext from '../../../context/LanguageContext';

import { CabecalhoWrapper, Logo, Navbar } from './styles';

function Cabecalho() {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;

  return (
    <CabecalhoWrapper>
      <Navbar>
        <ul>
          <li><a href="#Projects" tabIndex="0">{contentPage[0].header[0]}</a></li>
          <li><a href="#AboutMe" tabIndex="0">{contentPage[0].header[1]}</a></li>
        </ul>
      </Navbar>
      <Logo />
    </CabecalhoWrapper>
  );
}

export default Cabecalho;
