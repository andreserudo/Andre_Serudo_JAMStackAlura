import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../foundation/Input';
import FormContatoWrapper from './styles';

function FormContato({ onCloseButton }) {
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
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <textarea />
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
