import React from 'react';
import PropTypes from 'prop-types';
import Card from './styles';

function CardItem({ children }) {
  return (
    <Card>
      {children}
    </Card>
  );
}

CardItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardItem;
