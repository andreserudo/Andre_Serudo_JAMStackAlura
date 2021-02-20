import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const ApresentacaoWrapper = styled.section`  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  ${breakpointsMedia({
    sm: css`
      padding-top: 6rem;      
    `,
    md: css`
      padding-top: 6rem;      
    `,
    xl: css`
      padding-top: 8rem;      
    `,

  })}
`;

ApresentacaoWrapper.Nome = styled.h1`
  margin: 0;
  font-size: 18px;
  //font-size: 48px;
  font-style: normal;
  font-weight: lighter;
  line-height: 58px;
  letter-spacing: 0.15em;
  //color: #E9C46A;
  color: ${({ theme }) => theme.titleColor};
  padding-bottom: 1rem;

  ${breakpointsMedia({
    xs: css`font-size: 32px;`,
    sm: css`font-size: 44px;`,
    md: css`font-size: ;`,
    lg: css`
      padding-bottom: 3rem;
      font-size: 54px;`,
    xl: css`
      padding-bottom: 4rem;
      font-size: 64px;
    `,
  })}
`;

ApresentacaoWrapper.SobreNome = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
  // font-size: 48px;
  font-weight: bold;
  line-height: 58px;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.titleColor};
  padding-bottom: 4rem;  
  
  ${breakpointsMedia({
    xs: css`font-size: 34px;`,
    sm: css`font-size: 48px;`,
    md: css`font-size: ;`,
    lg: css`
      font-size: 58px;
      padding-bottom: 5rem;  
    `,
    xl: css`
      font-size: 68px;
      padding-bottom: 6rem;  
    `,
  })}
`;

ApresentacaoWrapper.QuebraLinha = styled.hr`
  width: 60%;
  color: ${({ theme }) => theme.titleColor};
  
`;

ApresentacaoWrapper.Profissao = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.15em;  
  text-align: center;
  color: ${({ theme }) => theme.titleColor};
  padding-top: 4rem;  

  ${breakpointsMedia({
    sm: css`
      font-size: 14px;    
    `,
  })}

`;

export default ApresentacaoWrapper;
