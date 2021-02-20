import React, { useContext } from 'react';
import { Wrapper, SectionTitle, ProjetosWrapper } from './styles';
import Card from '../Card';
import LanguageContext from '../../../context/LanguageContext';

function WrapperProjetos() {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;

  return (
    <Wrapper>
      <Wrapper.Container>
        <SectionTitle id="Projects">{contentPage[0].titles[0]}</SectionTitle>
        <ProjetosWrapper>
          {
            contentPage[0].projects.map((project) => (
              <Card key={project.titulo} project={project} />
            ))
          }
        </ProjetosWrapper>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default WrapperProjetos;
