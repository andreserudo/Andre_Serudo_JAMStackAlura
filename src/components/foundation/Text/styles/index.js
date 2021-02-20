import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const TextBase = styled.span`
  width: 100%;
  font-size: 14px;  
  color: ${({ theme }) => theme.paragraphyColor};
  /*
  ${breakpointsMedia({
    sm: css`      
      font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    `,
    md: css`      
      font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    `,
  })}   */
`;

export default TextBase;
