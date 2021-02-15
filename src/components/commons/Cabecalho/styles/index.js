import styled from 'styled-components';

const CabecalhoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};   
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: .5rem;
`;

const Logo = styled.div`  
  height: 166px;
  width: 172px;
  position: absolute;
  top: 142px;
  left: 50%;
  margin-left: -86px;
  border-radius: 50%;
  background-color: #E9C46A;
`;

export { CabecalhoWrapper, Logo, Navbar };
