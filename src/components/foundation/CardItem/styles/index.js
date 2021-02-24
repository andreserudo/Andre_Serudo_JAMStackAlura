import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Card = styled.span`  
  padding: .2rem .4rem;
  margin-bottom: .5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.paragraphyColor};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  font-size: ${({ theme }) => theme.smallestException.fontSize};  

  ${breakpointsMedia({
    sm: css`      
      font-size: ${({ theme }) => theme.paragraph2.fontSize};
    `,
    md: css`      
      font-size: 14px;
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
        margin-right: .5rem;
      `,
  })}     
  }

  & + & {    
    ${breakpointsMedia({
    xs: css`        
        margin-right: .5rem;
      `,
  })}     

  }


`;

export default Card;
