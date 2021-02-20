import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  background-color: ${({ theme }) => theme.sectionBackgroundColor};
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${breakpointsMedia({
    xs: css`
      padding-left: 3rem;
      padding-right: 3rem;
    `,
    sm: css`
    `,
    md: css`
      align-items: center;
      padding-left: unset;
      padding-right: unset;      
      padding-top: 7rem;
      padding-bottom: 7rem;
    `,
  })}

`;

Wrapper.Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${breakpointsMedia({
    md: css`
      width: 80%;      
    `,
  })}

`;

const SectionTitle = styled.h1`  
  padding-bottom: 3rem;
  color: ${({ theme }) => theme.titleColor};    
  font-size: ${({ theme }) => theme.title.fontSize};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.titleXS.fontSize};    
    `,
    sm: css`      
      font-size: ${({ theme }) => theme.titleSM.fontSize};    
    `,
    md: css`
      font-size: ${({ theme }) => theme.titleMD.fontSize};    
    `,
    lg: css`
      padding-bottom: 5rem;  
      font-size: ${({ theme }) => theme.titleLG.fontSize};      
    `,
    xl: css`
      font-size: ${({ theme }) => theme.titleXL.fontSize};    
    `,
  })};
`;

const ProjetosWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${breakpointsMedia({
    md: css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center; 
        flex-wrap: wrap;
      `,
  })}

`;

export { Wrapper, SectionTitle, ProjetosWrapper };
