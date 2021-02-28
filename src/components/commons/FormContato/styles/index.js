import styled from 'styled-components';

const FormContatoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.sectionBackgroundColor};

  .btnClose {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
    
    img{
      align-self: center;
      width: 16px;
      height: 16px;
    }
  }
  .btnClose:hover {
    background: #eddfbf;
  }

  div {
    height: 100%;
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: flex-start; 

    h1 {
      margin-bottom: 0;
    }

  }

  form {    
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;

    input {
      width: 100%;
      height: 35px;
      margin-bottom: 1rem;
    }

    textarea{
      width: 100%;
      
    }

    button {      
      color: rgb(255, 255, 255);
      background-color: ${({ theme }) => theme.paragraphyColor};   
      border-radius: 4px;
      font-weight: bold;
      text-decoration: none;
      padding: .25rem 1rem .25rem 1rem;
      margin-top: .5rem;
      margin-bottom: 1rem;
      transition: color 1.5s ease-in-out;
      transition: background-color 1s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.linkHoverColor};
        transition: background-color 1s;
      }      
    }
    
  }
`;

export default FormContatoWrapper;
