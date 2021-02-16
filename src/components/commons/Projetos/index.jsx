import React from 'react';
import { Wrapper, SectionTitle, ProjetosWrapper } from './styles';
import projects from '../../../themes/projectsData';
import Card from '../Card';

function WrapperProjetos() {
  return (
    <Wrapper>
      <SectionTitle>Projetos</SectionTitle>
      <ProjetosWrapper>
        {
          projects.map((project) => (
            <Card key={project.titulo} project={project} />
          ))
        }
      </ProjetosWrapper>
    </Wrapper>
  );
}

export default WrapperProjetos;
