import React, { useContext } from 'react';
import LanguageContext from '../../../context/LanguageContext';

import ApresentacaoWrapper from './styles';

const info = {
  nome: 'ANDRÉ',
  sobreNome: 'SERUDO',
  profissao: 'Software Engineer',
};

let newVar;

function Apresentacao() {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;

  return (
    <ApresentacaoWrapper id="#me">
      <ApresentacaoWrapper.Nome>{info.nome}</ApresentacaoWrapper.Nome>
      <ApresentacaoWrapper.SobreNome>{info.sobreNome}</ApresentacaoWrapper.SobreNome>
      <ApresentacaoWrapper.QuebraLinha />
      <ApresentacaoWrapper.Profissao>{contentPage[0].carreer}</ApresentacaoWrapper.Profissao>
    </ApresentacaoWrapper>
  );
}

export default Apresentacao;
