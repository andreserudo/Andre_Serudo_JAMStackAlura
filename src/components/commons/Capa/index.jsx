import React from 'react';
import CapaWrapper from './styles';
import Idiomas from '../Idiomas';

function Capa() {
  return (
    <CapaWrapper>
      <CapaWrapper.Content>
        <Idiomas />
      </CapaWrapper.Content>
    </CapaWrapper>
  );
}

export default Capa;
