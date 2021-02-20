import styled from 'styled-components';

const IdiomaWrapper = styled.div`
  display: flex;
  padding-top: .5rem;
  padding-right: .5rem;

  button {
    height: 18px;
    
    cursor: pointer;
    img {
      height: 100%;
    }

    &:disabled {
      opacity: .8;
      border: none;
    }
  }
  &:first-child{
      margin-right: .5rem;      
    }

`;

export default IdiomaWrapper;
