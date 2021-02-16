import React from 'react';
import Capa from '../src/components/commons/Capa';
import Cabecalho from '../src/components/commons/Cabecalho';
import WrapperProjetos from '../src/components/commons/Projetos';
import Footer from '../src/components/commons/Footer';
import Apresentacao from '../src/components/commons/Apresentacao';

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Capa />
      <Cabecalho />
      <Apresentacao />
      <WrapperProjetos />
      <Footer />
    </div>
  );
}
