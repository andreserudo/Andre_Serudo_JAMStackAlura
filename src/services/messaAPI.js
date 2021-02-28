const messageUrl = 'https://contact-form-api-jamstack.herokuapp.com/message';
const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const sendMessageAPI = async (dataDTO) => {
  const dataToSend = {
    name: dataDTO.nome,
    email: dataDTO.email,
    message: dataDTO.mensagem,
  };
  try {
    const messageSend = await fetch(messageUrl, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    await messageSend.json();

    return formStates.DONE;
  } catch (error) {
    // console.error(error);

    return formStates.ERROR;
  }
};

export default sendMessageAPI;
