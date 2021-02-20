import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles';

function Social({ nome, src, link }) {
  return (
    <Wrapper>
      <a href={link} target="_blank" rel="noreferrer" hint={nome}>
        <img
          src={src}
          alt={nome}
          height="34px"
          width="34px"
        />
      </a>
    </Wrapper>
  );
}

Social.propTypes = {
  nome: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Social;
