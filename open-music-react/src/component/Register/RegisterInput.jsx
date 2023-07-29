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

function RegisterInput({ register }) {
  const [valueName, onNameChangeHandler] = useInput('');
  const [valueEmail, onEmailChangeHandler] = useInput('');
  const [valuePassword, onPasswordChangeHandler] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    register({
      username: valueEmail,
      password: valuePassword,
      fullname: valueName,
    });
  }

  return (
    <div className="input-register">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Fullname</label>
        <input type="text" id="name" value={valueName} onChange={onNameChangeHandler} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={valueEmail} onChange={onEmailChangeHandler} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={valuePassword} onChange={onPasswordChangeHandler} />
        <button type="submit">
          Regiter
        </button>
      </form>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
