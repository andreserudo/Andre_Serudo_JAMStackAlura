import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../themes/utils/breakpointsMedia';

const CabecalhoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};   
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  ul {
    width: 100%;
    display: flex;    
    justify-content: space-evenly;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    ${breakpointsMedia({
    sm: css`
      justify-content: space-between;
      padding-left: 1.5rem;
      padding-right: .5rem;
    `,
    md: css`
      justify-content: space-around;
      padding-left: unset;
      padding-right: unset;
    `,
  })}

  }

  li {
    list-style: none;    
    padding: 1rem 0rem 1rem 0rem;
  }

  a {    
    cursor: pointer;
    text-decoration: none;
    font-weight:bold;    
    color: ${({ theme }) => theme.colors.primary.colorTitle};    
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary.colorTitleHover};    
  }
  
`;

const Logo = styled.div`  
  height: 166px;
  width: 172px;
  position: absolute;
  top: 142px;
  left: 50%;
  margin-left: -86px;
  border-radius: 50%;
  background-image: url('/images/profile.png');  
  background-size: cover;
  display: none;

  ${breakpointsMedia({
    sm: css`
      display:inherit;
    `,
  })}

`;

export { CabecalhoWrapper, Logo, Navbar };
