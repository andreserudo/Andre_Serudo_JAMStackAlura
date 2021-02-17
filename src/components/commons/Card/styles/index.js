import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';
import propToStyle from '../../../../themes/utils/propToStyle';

const CardWrapper = styled.div`
  // width: 333px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;  
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};

  ${breakpointsMedia({
    xs: css`width: 90%;`,
  })}

  &:first-of-type {
    margin-bottom: 1rem;
    ${breakpointsMedia({
    md: css`      
      `,
  })}

  }

  & + & {
    margin-bottom: 1rem;
    ${breakpointsMedia({
    md: css`
      margin-bottom: unset;`,
  })}

  }  

  &:hover{
    box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.75);    
  }
`;

CardWrapper.CardImage = styled.img`
  width: 100%;

  ${breakpointsMedia({
    md: css`
      height: 228px;
      width: 333px;`,
  })}

  ${propToStyle('src')};
  ${propToStyle('alt')};
  
`;

CardWrapper.CardTextsWrapper = styled.div`
`;

CardWrapper.CardTitle = styled.div`
  font-size: 20px;
  padding: 1rem 0rem 1rem .6rem;
  color: ${({ theme }) => theme.colors.primary.colorTitle};
`;

CardWrapper.CardDescription = styled.div`
  font-size: 14px;  
  padding: 0rem .25rem 1rem .6rem;
  color: ${({ theme }) => theme.colors.secondary.backgroundColor};
`;

CardWrapper.CardLink = styled.a`
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary.backgroundColor};
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  padding: .25rem 1rem .25rem 1rem;
  margin-bottom: 1rem;

  &:hover {    
    background-color: ${({ theme }) => theme.colors.secondary.backgroundColorHover};
  }
`;

export default CardWrapper;
