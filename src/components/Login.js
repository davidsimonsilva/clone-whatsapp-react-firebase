import React from 'react';
import Api from '../Api';
import PropTypes from 'prop-types';
import './Login.css'


const Login = ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )
};

Login.defaultProps = {
    onClick: () => null,
    active: false,
    data: null,
  };
  
  Login.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
    data: PropTypes.any,
  };
  
  export default Login;