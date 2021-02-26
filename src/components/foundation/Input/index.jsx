import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './styles';

function Input({ placeholder }) {
  return (
    <InputBase placeholder={placeholder} />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
