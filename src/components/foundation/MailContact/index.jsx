import React, { useContext } from 'react';
import LanguageContext from '../../../context/LanguageContext';
import { MailWrapper, Contact } from './styles';

function MailContact() {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;

  return (
    <MailWrapper>
      <img src="/email.png" alt="Mail Contact" width="20px" />
      <Contact>
        {contentPage[0].mail}
      </Contact>
    </MailWrapper>
  );
}

export default MailContact;
