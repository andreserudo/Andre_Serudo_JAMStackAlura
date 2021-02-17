import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Wrapper = styled.div`
  img {
    height: 34px;
    width: 34px;
  }

  &:first-of-type {
    margin-right: unset;
    margin-bottom: 18px;

    ${breakpointsMedia({
    xs: css`
      margin-right: 32px;
      margin-bottom: unset;
    `,
  })}      

  }
`;

export default Wrapper;
