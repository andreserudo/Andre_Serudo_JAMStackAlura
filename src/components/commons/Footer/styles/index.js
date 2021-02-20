import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';
// import propToStyle from '../../../../themes/utils/propToStyle';

const FooterWrapper = styled.footer`
  height: 100px;
  width: 100%;
  display: flex;  
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  
  ${breakpointsMedia({
    xs: css`
      height: 60px;
    `,
  })}      
`;

const FooterIconWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.sectionBackgroundColor};

`;

export { FooterWrapper, FooterIconWrapper };
