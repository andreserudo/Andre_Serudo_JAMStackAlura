import React, { useContext } from 'react';
import IdiomasWrapper from './styles';
import { content } from '../../../themes/projectsData';
import LanguageContext from '../../../context/LanguageContext';
import Idioma from '../Idioma';

function Idiomas() {
  const { handleChangeLanguage } = useContext(LanguageContext);
  return (
    <IdiomasWrapper>
      {
        content.map(({ language }) => (
          <Idioma key={language} language={language} />
        ))
      }
    </IdiomasWrapper>
  );
}

export default Idiomas;
