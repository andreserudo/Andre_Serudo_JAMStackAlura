import React from 'react';

import ApresentacaoWrapper from './styles';

const info = {
  nome: 'ANDRÉ',
  sobreNome: 'SERUDO',
  profissao: 'Software Engineer',
};

function Apresentacao() {
  return (
    <ApresentacaoWrapper id="#me">
      <ApresentacaoWrapper.Nome>{info.nome}</ApresentacaoWrapper.Nome>
      <ApresentacaoWrapper.SobreNome>{info.sobreNome}</ApresentacaoWrapper.SobreNome>
      <ApresentacaoWrapper.QuebraLinha />
      <ApresentacaoWrapper.Profissao>{info.profissao}</ApresentacaoWrapper.Profissao>
    </ApresentacaoWrapper>
  );
}

export default Apresentacao;
