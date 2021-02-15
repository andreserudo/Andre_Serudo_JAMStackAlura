import React from 'react';

import HeaderWrapper from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.TopImage />
      <HeaderWrapper.Menu>
        <p>Projects</p>
        <p>About Me</p>
      </HeaderWrapper.Menu>
      <HeaderWrapper.ProfileWrapper>
        <HeaderWrapper.Profile />
      </HeaderWrapper.ProfileWrapper>
    </HeaderWrapper>
  );
}

export default Header;
