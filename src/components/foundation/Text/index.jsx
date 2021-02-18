import React from 'react';
import PropTypes from 'prop-types';
import TextBase from './styles';

function Text({ children }) {
  return (
    <TextBase>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
