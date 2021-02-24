import styled from 'styled-components';

const MailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: .5rem;
`;

const Contact = styled.a`
  font-size: 14px;  
  color: ${({ theme }) => theme.paragraphyColor};  
  text-decoration: none;  
  padding-left: .5rem;
`;

export { MailWrapper, Contact };
