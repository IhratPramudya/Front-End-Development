/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RegisterInput from '../component/Register/RegisterInput';
import { register } from '../utils/network';

function RegisterPage() {
    const navigate = useNavigate();

    async function submitEventHandler(user) {
        const { error } = await register(user);

        if (!error) {
            alert('Yeah Kamu Berhasil Registrasi');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }

    return (
        <section className="register-page">
            <h2>Fill in to register as a user</h2>
            <RegisterInput register={submitEventHandler} />
            <p>
                Alredy have an account?
                <Link to="/">Login here</Link>
            </p>
        </section>
    );
}

export default RegisterPage;
