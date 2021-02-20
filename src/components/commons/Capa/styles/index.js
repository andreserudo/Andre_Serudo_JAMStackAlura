import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const CapaWrapper = styled.div`
  width: 100%;
  height: 271px;
  background-image: url('/images/xsCapa.png');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-start;  
  justify-content: center;
  
  ${breakpointsMedia({
    md: css`
      background-image: url('/images/mdCapa.png');
    `,
    lg: css`
      background-image: url('/images/lgCapa.png');
    `,
  })}
`;

CapaWrapper.Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`  
      width: 60%
    `,
  })}

`;

export default CapaWrapper;
