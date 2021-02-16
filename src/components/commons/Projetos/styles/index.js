import styled from 'styled-components';
import propToStyle from '../../../../themes/utils/propToStyle';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const SectionTitle = styled.h1`
  
`;

const ProjetosWrapper = styled.div``;

ProjetosWrapper.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
`;

ProjetosWrapper.CardImage = styled.img`
  width: 100%;
  ${propToStyle('src')}
  ${propToStyle('alt')}
  
`;

ProjetosWrapper.CardTextsWrapper = styled.div``;

ProjetosWrapper.CardTitle = styled.div``;

ProjetosWrapper.CardDescription = styled.div``;

ProjetosWrapper.CardLink = styled.a``;

export { Wrapper, SectionTitle, ProjetosWrapper };
