import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Api from '../Api';
import './Login.css'
import reactLogo from '../images/react-logo.png'

const Login = ({onReceive}) => {
    useEffect(() => {
        Api.firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                onReceive(user)
            }
        });
    });

    const handleGoogleLogin = () => {
        Api.loginWithGoogle()
            .catch(function (error) {
                alert('Ocorreu um erro no login');
                console.log(error);
            });
    }

    return (
        <div className="login">
            <img src={reactLogo} alt="logo" className="logo" />
            <button onClick={handleGoogleLogin} className="button">Entrar com google</button>
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