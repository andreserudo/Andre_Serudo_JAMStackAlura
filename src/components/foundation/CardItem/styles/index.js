import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Card = styled.span`  
  padding: .2rem .4rem;
  border-radius: 6px;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary.backgroundColor};
  font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};  

  ${breakpointsMedia({
    sm: css`      
      font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    `,
    md: css`      
      font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    `,
  })}   
  /*
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};    
    `,
    sm: css`
      font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};    
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.subTitleMD.fontSize};    
    `,
    lg: css`
      font-size: ${({ theme }) => theme.typographyVariants.subTitleLG.fontSize};    
    `,
    xl: css`
      font-size: ${({ theme }) => theme.typographyVariants.subTitleXL.fontSize};    
    `,
  })};        */


  &:first-child {
    margin-bottom: .5rem;

    ${breakpointsMedia({
    xs: css`
        margin-bottom: unset;
        margin-right: .5rem;
      `,
  })}     
  }

  & + & {
    margin-bottom: 1rem;
    ${breakpointsMedia({
    xs: css`
        margin-bottom: unset;
        margin-right: .5rem;
      `,
  })}     

  }


`;

export default Card;
