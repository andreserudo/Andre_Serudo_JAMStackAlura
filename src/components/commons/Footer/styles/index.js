import styled from 'styled-components';
// import propToStyle from '../../../../themes/utils/propToStyle';

const FooterWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};
`;

const FooterIconWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary.backgroundColor};

`;

export { FooterWrapper, FooterIconWrapper };
