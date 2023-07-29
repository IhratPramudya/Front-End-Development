/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginInput from '../component/Login/LoginInput';
import { login } from '../utils/network';

function LoginPage({ loginSuccess }) {
    async function onLogin(user) {
        const { error, data } = await login(user);

        console.log(data);

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="login-page">
            <h2>
                Login to use app, please.
            </h2>
            <LoginInput login={onLogin} />
            <p>
                Dont have an account?
                <Link to="/register">
                    {' '}
                    Register here
                </Link>
            </p>
        </section>

    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
