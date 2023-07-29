/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks';

function LoginInput({ login }) {
    const [valueEmail, onEmailChangeHandler] = useInput('');
    const [valuePassword, onPasswordChangeHandler] = useInput('');

    function onSubmitHandler(event) {
        event.preventDefault();

        login({
            username: valueEmail,
            password: valuePassword,
        });
    }

    return (
        <div className="input-login">
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={valueEmail} onChange={onEmailChangeHandler} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={valuePassword} onChange={onPasswordChangeHandler} />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
