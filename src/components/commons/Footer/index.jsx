import React from 'react';
import Social from '../Social';
import { FooterWrapper, FooterIconWrapper } from './styles';

const profiles = [
  {
    nome: 'Github',
    link: 'https://github.com/andreserudo',
    src: '/github.svg',
  },
  {
    nome: 'Linkedin',
    link: 'https://www.linkedin.com/in/andreserudo/',
    src: '/linkedin.svg',
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <FooterIconWrapper>
        {profiles.map(({ nome, src, link }) => (
          <Social
            key={nome}
            nome={nome}
            src={src}
            link={link}
          />
        ))}
      </FooterIconWrapper>
    </FooterWrapper>
  );
}

export default Footer;
