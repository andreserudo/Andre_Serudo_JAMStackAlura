import React from 'react';

import { CabecalhoWrapper, Logo, Navbar } from './styles';

function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Navbar>
        <ul>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#AboutMe">About Me</a></li>
        </ul>
      </Navbar>
      <Logo />
    </CabecalhoWrapper>
  );
}

export default Cabecalho;
