import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${breakpointsMedia({
    xs: css`
      align-items: center;
    `,
    md: css`
      padding-right: unset;
      padding-left: unset;
      padding-top: 7rem;
      padding-bottom: 7rem;
    `,
  })}      

  h1 {
    margin-bottom: 2rem;
  color: ${({ theme }) => theme.titleColor};
  font-size: ${({ theme }) => theme.title.fontSize};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.titleXS.fontSize};    
    `,
    sm: css`
      font-size: ${({ theme }) => theme.titleSM.fontSize};    
    `,
    md: css`
      font-size: ${({ theme }) => theme.titleMD.fontSize};    
    `,
    lg: css`
      font-size: ${({ theme }) => theme.titleLG.fontSize};    
      margin-bottom: 4rem;
    `,
    xl: css`
      font-size: ${({ theme }) => theme.titleXL.fontSize};    
    `,
  })};        
  }

`;

Wrapper.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Wrapper.Card = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.sectionBackgroundColor};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;  
  ${breakpointsMedia({
    xs: css`    
      width: 80%;
      flex-direction: column;
    `,
    sm: css`    
      width: 80%;
      flex-direction: column;
    `,
    md: css`      
      flex-direction: row;
    `,
    lg: css`    
      width: 70%;
    `,
    xl: css`    
      width: 50%;
    `,
  })}      

`;

Wrapper.Profile = styled.div`
  ${breakpointsMedia({
    xs: css`  
      width: 100%;      
      height: 150px;
      background-image: url('/images/About.png');  
      background-size: cover;
      background-position: right;        
    `,
    sm: css`    
      
      height: 333px;
    `,
    md: css`
      width: 50%;      
      height: 458px;
    `,
    lg: css`
      width: 50%;            
    `,
  })}      

`;

Wrapper.Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  padding: .5rem .3rem ;  
  text-align: justify;

  ${breakpointsMedia({
    xs: css`      
      padding: 1rem 2rem 1rem 2rem;
    `,
    md: css`
      width: 50%;
    `,
  })}      

  h2 {
    font-size: 18px;
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    color: ${({ theme }) => theme.titleColor};    
  }

  h2:first-of-type{
    margin-top:1rem;
  }
`;

Wrapper.Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${breakpointsMedia({
    xs: css`
      flex-direction: row;
      flex-wrap: wrap;
    `,
  })}      
`;

export default Wrapper;
