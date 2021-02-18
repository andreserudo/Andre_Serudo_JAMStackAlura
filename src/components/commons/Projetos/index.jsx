import React from 'react';
import { Wrapper, SectionTitle, ProjetosWrapper } from './styles';
import { projects } from '../../../themes/projectsData';
import Card from '../Card';

function WrapperProjetos() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <SectionTitle id="Projects">Projects</SectionTitle>
        <ProjetosWrapper>
          {
            projects.map((project) => (
              <Card key={project.titulo} project={project} />
            ))
          }
        </ProjetosWrapper>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default WrapperProjetos;
