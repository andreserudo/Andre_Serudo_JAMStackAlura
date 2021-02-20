import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const WrapperTemas = styled.div`

`;

WrapperTemas.Tema = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-style: none;
  padding-top:.5rem;
`;

export default WrapperTemas;
