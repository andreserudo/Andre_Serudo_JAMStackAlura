import styled from 'styled-components';

const FormContatoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    height: 100%;
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center; 

    button {
      border:none;
    }
  }

  form {    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      height: 35px;
      margin-bottom: 1rem;
    }

    textarea{
      width: 50%;
    }
  }
`;

export default FormContatoWrapper;
