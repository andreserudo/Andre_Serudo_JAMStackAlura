import { useState } from 'react';

function useTheme() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleChangeTheme = async (theme) => {
    await setCurrentTheme(theme);
  };

  return [
    currentTheme,
    handleChangeTheme,
  ];
}

export default useTheme;
