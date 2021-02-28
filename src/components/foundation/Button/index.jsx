import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapped from './styles';

function Button({ children, onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <ButtonWrapped
      onClick={() => handleClick()}
    >
      { children }
    </ButtonWrapped>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
