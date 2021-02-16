import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-bottom: 6rem;
`;

const SectionTitle = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary.colorTitle}  
`;

const ProjetosWrapper = styled.div``;

export { Wrapper, SectionTitle, ProjetosWrapper };
