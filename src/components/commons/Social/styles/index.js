import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Wrapper = styled.div`
  img {
    height: 34px;
    width: 34px;
  }

  img:hover {
    height: 40px;
    width: 40px;
    transition: .5s ease-in-out;
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
