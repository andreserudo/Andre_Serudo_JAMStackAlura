import styled from 'styled-components';

const WrapperTemas = styled.div`

`;

WrapperTemas.Tema = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-style: none;
  padding-top:.5rem;
`;

export default WrapperTemas;
