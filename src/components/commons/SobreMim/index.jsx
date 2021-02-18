import React from 'react';
import Text from '../../foundation/Text';
import Wrapper from './styles';
import { bio, values, tools } from '../../../themes/projectsData';
import Card from '../../foundation/CardItem/styles';

function SobreMim() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <h1>About Me</h1>
        <Wrapper.Card id="AboutMe">
          <Wrapper.Profile />
          <Wrapper.Description>
            <Text>{bio}</Text>
            <h4>Values</h4>
            <Wrapper.Cards>
              {
              values.map((value) => (
                <Card key={value}>{value}</Card>
              ))
            }
            </Wrapper.Cards>
            <h4>Tools</h4>
            <Wrapper.Cards>
              {
              tools.map((tool) => (
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
