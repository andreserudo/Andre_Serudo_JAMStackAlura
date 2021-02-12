import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

HeaderWrapper.TopImage = styled.div``;

HeaderWrapper.Menu = styled.div`
  color: ${({ theme }) => theme.colors.primary.color}; 
  background-color: ${({ theme }) => theme.colors.primary.backgroundColor};
`;

export default HeaderWrapper;
