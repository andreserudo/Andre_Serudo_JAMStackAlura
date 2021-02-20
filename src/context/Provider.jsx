import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LanguageContext from './LanguageContext';
import { content } from '../themes/projectsData';
import { colorPallet } from '../themes';

function Provider({ children }) {
  const [language, setLanguage] = useState({ language: 'pt' });
  const [currentTheme, setCurrentTheme] = useState('light');
  const [contentPage, setContentPage] = useState(
    content.filter((item) => item.language === language.language),
  );
  const [contentTheme, setContentTheme] = useState(
    colorPallet.filter((item) => item.theme === currentTheme.theme),
  );

  const handleChangeLanguage = (value) => {
    const otherLanguage = { language: value };

    setLanguage(otherLanguage);
  };

  useEffect(() => {
    setContentPage(content.filter((item) => item.language === language.language));
  }, []);

  useEffect(() => {
    setCurrentTheme(colorPallet.filter((item) => item.theme === currentTheme));
  }, []);

  useEffect(() => {
    setContentPage(content.filter((item) => item.language === language.language));
  }, [language]);

  // console.log(currentTheme);

  const context = {
    language,
    contentPage,
    currentTheme,
    contentTheme,
    handleChangeLanguage,
  };

  return (
    <LanguageContext.Provider value={context}>
      { children }
    </LanguageContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}),
};

Provider.defaultProps = {
  children: {},
};

export default Provider;
