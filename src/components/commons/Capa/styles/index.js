import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const CapaWrapper = styled.div`
  width: 100%;
  height: 192px;
  background-image: url('/images/xsCapa.png');
  background-position: center;
  background-size: cover;

  ${breakpointsMedia({
    md: css`
      background-image: url('/images/mdCapa.png');
    `,
    lg: css`
      background-image: url('/images/lgCapa.png');
    `,
  })}
`;

export default CapaWrapper;
