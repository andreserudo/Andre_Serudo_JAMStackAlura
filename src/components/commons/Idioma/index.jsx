import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../../context/LanguageContext';
import IdiomaWrapper from './styles';

function Idioma({ language }) {
  const { handleChangeLanguage } = useContext(LanguageContext);
  const sourceImage = `/${language}.jpg`;
  return (
    <IdiomaWrapper>
      <button
        type="button"
        onClick={() => handleChangeLanguage(language)}
      >
        <img src={sourceImage} alt={language} />
      </button>
    </IdiomaWrapper>
  );
}

Idioma.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Idioma;
