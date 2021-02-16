import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './styles';

function Card({ project }) {
  return (

    <CardWrapper>
      <CardWrapper.CardImage
        src={project.imagem}
        alt={project.titulo}
      />
      <CardWrapper.CardTextsWrapper>
        <CardWrapper.CardTitle>{project.titulo}</CardWrapper.CardTitle>
        <CardWrapper.CardDescription>
          {project.descricao}
        </CardWrapper.CardDescription>
      </CardWrapper.CardTextsWrapper>
      <CardWrapper.CardLink
        href={project.link}
        target="_blank"
      >
        Repository
      </CardWrapper.CardLink>
    </CardWrapper>

  );
}

Card.propTypes = {
  project: PropTypes.shape().isRequired,
};

export default Card;
