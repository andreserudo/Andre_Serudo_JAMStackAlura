import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const ApresentacaoWrapper = styled.div`  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 6rem;

  ${breakpointsMedia({
    sm: css`
      padding-top: 4rem;
      margin-top: 56px;
    `,
  })}
`;

ApresentacaoWrapper.Nome = styled.h2`
  margin: 0;
  font-size: 18px;
  //font-size: 48px;
  font-style: normal;
  font-weight: lighter;
  line-height: 58px;
  letter-spacing: 0.15em;
  color: #E9C46A;
  padding-bottom: 1rem;

  ${breakpointsMedia({
    xs: css`font-size: 32px;`,
    sm: css`font-size: 44px;`,
    md: css`font-size: ;`,
    lg: css`font-size: ;`,
    xl: css`font-size: ;`,
  })}
`;

ApresentacaoWrapper.SobreNome = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
  // font-size: 48px;
  font-weight: bold;
  line-height: 58px;
  letter-spacing: 0.2em;
  color: #E9C46A;
  padding-bottom: 2rem;

  ${breakpointsMedia({
    xs: css`font-size: 34px;`,
    sm: css`font-size: 48px;`,
    md: css`font-size: ;`,
    lg: css`font-size: ;`,
    xl: css`font-size: ;`,

  })}
`;

ApresentacaoWrapper.QuebraLinha = styled.hr`
  width: 80%
`;
ApresentacaoWrapper.Profissao = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.15em;
  padding-top: 2rem;
  text-align: center;
  
  ${breakpointsMedia({
    sm: css`
      font-size: 14px;    
    `,
  })}

`;

export default ApresentacaoWrapper;
