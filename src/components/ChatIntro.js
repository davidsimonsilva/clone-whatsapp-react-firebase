import React from 'react';
import './ChatIntro.css';
import PropTypes from 'prop-types';

const ChatIntro = () => {
    return (
        <div className="chatIntro">
            <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sicronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte seus telefone a uma rede Wi-Fi</h2>
        </div>
    )
};

ChatIntro.defaultProps = {
  onClick: () => null,
  active: false,
  data: null,
};

ChatIntro.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  data: PropTypes.any,
};

export default ChatIntro;