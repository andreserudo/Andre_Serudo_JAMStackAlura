import React from 'react';
import WrapperTemas from './styles';
import { colorPallet } from '../../../themes';
import useTheme from '../../../hooks/useTheme';

function Temas() {
  const [lightTheme, darkTheme] = colorPallet;
  const [_currentTheme, handleChangeTheme] = useTheme();
  const valor = useTheme();
  // console.log(handleChangeTheme);
  return (
    <WrapperTemas>
      <WrapperTemas.Tema
        color={lightTheme.titleColor}
        background={lightTheme.navBackgroundColor}
        onClick={() => handleChangeTheme(lightTheme.theme)}
      >
        {lightTheme.theme}
      </WrapperTemas.Tema>
      <WrapperTemas.Tema
        color={darkTheme.titleColor}
        background={darkTheme.navBackgroundColor}
        onClick={() => handleChangeTheme(darkTheme.theme)}
      >
        {darkTheme.theme}
      </WrapperTemas.Tema>
    </WrapperTemas>
  );
}

export default Temas;
