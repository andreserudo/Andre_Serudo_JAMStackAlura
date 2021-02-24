import React, { useContext } from 'react';
import Text from '../../foundation/Text';
import Wrapper from './styles';
import Card from '../../foundation/CardItem/styles';
import LanguageContext from '../../../context/LanguageContext';
import MailContact from '../../foundation/MailContact';

function SobreMim() {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;

  return (
    <Wrapper>
      <Wrapper.Container>
        <h1>{contentPage[0].titles[1]}</h1>
        <Wrapper.Card id="AboutMe">
          <Wrapper.Profile />
          <Wrapper.Description>
            <Text>{contentPage[0].bio}</Text>
            <br />
            <Text>{contentPage[0].objective}</Text>
            <MailContact />
            <h2>{contentPage[0].bioTitles[0]}</h2>
            <Wrapper.Cards>
              {
              contentPage[0].values.map((value) => (
                <Card key={value}>{value}</Card>
              ))
            }
            </Wrapper.Cards>
            <h2>{contentPage[0].bioTitles[1]}</h2>
            <Wrapper.Cards>
              {
              contentPage[0].tools.map((tool) => (
                <Card key={tool}>{tool}</Card>
              ))
            }
            </Wrapper.Cards>
          </Wrapper.Description>
        </Wrapper.Card>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default SobreMim;
