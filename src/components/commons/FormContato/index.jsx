import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from '../../../animations/error/errorDog.json';
import loadingAnimation from '../../../animations/loading/loadingElephant.json';
import successAnimation from '../../../animations/success/successManWithTumbsUp.json';
import FormContatoWrapper from './styles';
import sendMessageAPI from '../../../services/messaAPI';

function FormContato({ onCloseButton }) {
  const defaultValues = {
    nome: '',
    email: '',
    mensagem: '',
  };
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [state, setState] = useState(formStates.DEFAULT);
  const [infoForm, setInfoForm] = useState({
    nome: 'fulano',
    email: 'fulano@gmail.com',
    mensagem: '123456',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');

    setInfoForm({
      ...infoForm,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState(formStates.LOADING);
    const result = await sendMessageAPI(infoForm);
    setState(formStates[result]);
  };

  const handleClose = () => {
    setInfoForm(defaultValues);
    setState(formStates.DEFAULT);
    onCloseButton();
  };

  return (

    <FormContatoWrapper>
      <button
        className="btnClose"
        type="button"
        onClick={() => handleClose()}
      >
        <img src="/cancel.svg" alt="Close" />
      </button>

      { state === formStates.DEFAULT
        && (
        <div>
          <h1>Envie sua mensagem</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              placeholder="Nome"
              name="nome"
              value={infoForm.nome}
              onChange={(event) => handleChange(event)}
            />
            <input
              placeholder="Email"
              name="email"
              value={infoForm.email}
              onChange={(event) => handleChange(event)}
            />
            <textarea
              placeholder="Sua mensagem..."
              name="mensagem"
              value={infoForm.mensagem}
              onChange={(event) => handleChange(event)}
              rows="5"
            />
            <button
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
        )}
      { state === formStates.LOADING && (
        <div>
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </div>
      )}
      { state === formStates.ERROR
          && (
            <div>
              <h1>É... deu algo errado.</h1>
              <Lottie
                width="150px"
                height="150px"
                config={{ animationData: errorAnimation, loop: true, autoplay: true }}
              />
              <button
                type="button"
                onClick={() => setState(formStates.DEFAULT)}
              >
                Tentar enviar novamente
              </button>
            </div>
          )}
      { state === formStates.DONE
          && (
            <div>
              <h1>Obrigado pela mensagem!</h1>
              <Lottie
                width="150px"
                height="150px"
                config={{ animationData: successAnimation, loop: true, autoplay: true }}
              />
              <button
                type="button"
                onClick={() => handleClose()}
              >
                Fechar
              </button>
            </div>
          )}
    </FormContatoWrapper>
  );
}

FormContato.propTypes = {
  onCloseButton: PropTypes.func.isRequired,
};

export default FormContato;
