import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

HeaderWrapper.TopImage = styled.div`
  height: 85%;
  background-image: url('/images/backgroundHeader.png');
  background-position: top;
  background-size: cover;
`;

HeaderWrapper.Menu = styled.div`
  display: flex;  
  height: 15%; 
  color: ${({ theme }) => theme.colors.primary.color}; 
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};

  p {
    margin: 0;
  }
`;

HeaderWrapper.ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

HeaderWrapper.Profile = styled.div`
  height: 166px;
  width: 172px;
  background-color: ${({ theme }) => theme.colors.primary.color}; 
  border-radius: 50%;
  position: relative;
  left: 101.5px;
  top: 166px;  
`;

export default HeaderWrapper;
