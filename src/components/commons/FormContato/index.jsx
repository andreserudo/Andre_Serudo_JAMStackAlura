import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../foundation/Input';
import FormContatoWrapper from './styles';

function FormContato({ onCloseButton }) {
  const [infoForm, setInfoForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');

    setInfoForm({
      ...infoForm,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (

    <FormContatoWrapper>
      <button
        type="button"
        onClick={() => onCloseButton()}
      >
        <img src="/cancel.svg" alt="Close" />
      </button>
      <div>
        <h1>Envie sua mensagem</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Input
            placeholder="Nome"
            name="nome"
            value={infoForm.nome}
            onChange={(event) => handleChange(event)}
          />
          <Input
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
          />
          <button
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </FormContatoWrapper>
  );
}

FormContato.propTypes = {
  onCloseButton: PropTypes.func.isRequired,
};

export default FormContato;
