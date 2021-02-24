import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './styles';
import LanguageContext from '../../../context/LanguageContext';

function Card({ project }) {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;

  return (

    <CardWrapper>
      <CardWrapper.CardImage
        src={project.imagem}
        alt=""
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
        {contentPage[0].projectLink}
      </CardWrapper.CardLink>
    </CardWrapper>

  );
}

Card.propTypes = {
  project: PropTypes.shape().isRequired,
};

export default Card;
