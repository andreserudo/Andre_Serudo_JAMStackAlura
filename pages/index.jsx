import React from 'react';
import Capa from '../src/components/commons/Capa';
import Cabecalho from '../src/components/commons/Cabecalho';
import WrapperProjetos from '../src/components/commons/Projetos';
import Rodape from '../src/components/commons/Rodape';

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
      <Rodape />
    </div>
  );
}
