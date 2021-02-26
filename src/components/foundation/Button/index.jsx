import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapped from './styles';

function Button({ children }) {
  return (
    <ButtonWrapped>
      { children }
    </ButtonWrapped>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
