import styled from 'styled-components';

const ApresentacaoWrapper = styled.div`  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

ApresentacaoWrapper.Nome = styled.h2`
  margin: 0;
  font-size: 48px;
  font-style: normal;
  font-weight: lighter;
  line-height: 58px;
  letter-spacing: 0.15em;
  color: #E9C46A;
  padding-bottom: 1rem;
`;

ApresentacaoWrapper.SobreNome = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 48px;
  font-weight: bold;
  line-height: 58px;
  letter-spacing: 0.2em;
  color: #E9C46A;
  padding-bottom: 2rem;
`;

ApresentacaoWrapper.QuebraLinha = styled.hr`
  width: 80%
`;
ApresentacaoWrapper.Profissao = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.15em;
  padding-top: 2rem;
`;

export default ApresentacaoWrapper;
