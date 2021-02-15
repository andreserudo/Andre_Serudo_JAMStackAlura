import React from 'react';

import { CabecalhoWrapper, Logo, Navbar } from './styles';

function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Navbar>
        <p>Projetos</p>
        <p>Sobre mim</p>
      </Navbar>
      <Logo />
    </CabecalhoWrapper>
  );
}

export default Cabecalho;
