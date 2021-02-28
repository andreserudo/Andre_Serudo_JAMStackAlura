import React, { useContext, useState } from 'react';
import Text from '../../foundation/Text';
import Wrapper from './styles';
import Card from '../../foundation/CardItem/styles';
import LanguageContext from '../../../context/LanguageContext';
import MailContact from '../../foundation/MailContact';
import Button from '../../foundation/Button';
import Modal from '../Modal';
import Box from '../../foundation/Box';
import FormContato from '../FormContato';

function SobreMim() {
  const pageLanguage = useContext(LanguageContext);
  const { contentPage } = pageLanguage;
  const [isItModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Modal
        isOpen={isItModalOpen}
        onClose={() => handleCloseModal()}
      >
        {(propsDoModal) => (
          <Box
            backgroundColor="white"
            display="flex"
            height="50vh"
            width="50%"
            alignItems="center"
            position="relative"
            left="25%"
            top="25%"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <FormContato onCloseButton={handleCloseModal} />
          </Box>
        )}
      </Modal>

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

        <Button
          onClick={() => {
            // isModalOpen = true;
            console.log('isModalOpen', isItModalOpen);
            setModalOpen(!isItModalOpen); // novo state sendo atribuido
          }}
        >
          Clique aqui!
        </Button>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default SobreMim;
