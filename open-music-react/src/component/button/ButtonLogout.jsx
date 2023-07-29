/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function ButtonLogout({ onLogout }) {
    return <button className="btn btn-outline-danger" onClick={() => onLogout()} type="button">Logout</button>;
}

ButtonLogout.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default ButtonLogout;
