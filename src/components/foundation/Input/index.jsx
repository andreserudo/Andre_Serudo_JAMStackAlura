import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './styles';

function Input({
  placeholder, name, value, onChange,
}) {
  return (
    <InputBase
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  onChange: () => {},
};

export default Input;
