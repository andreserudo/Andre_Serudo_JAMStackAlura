import React from 'react';
import { Wrapper, SectionTitle, ProjetosWrapper } from './styles';
import projects from '../../../themes/projectsData';

function WrapperProjetos() {
  return (
    <Wrapper>
      <SectionTitle>Projetos</SectionTitle>
      <ProjetosWrapper>
        {
          projects.map((project) => (
            <ProjetosWrapper.Card>
              <ProjetosWrapper.CardImage
                src={project.imagem}
                alt={project.titulo}
              />
              <ProjetosWrapper.CardTextsWrapper>
                <ProjetosWrapper.CardTitle>{project.titulo}</ProjetosWrapper.CardTitle>
                <ProjetosWrapper.CardDescription>
                  {project.descricao}
                </ProjetosWrapper.CardDescription>
              </ProjetosWrapper.CardTextsWrapper>
              <ProjetosWrapper.CardLink
                href={project.link}
                target="_blank"
              >
                Visit Repository
              </ProjetosWrapper.CardLink>
            </ProjetosWrapper.Card>
          ))
        }
      </ProjetosWrapper>
    </Wrapper>
  );
}

export default WrapperProjetos;
