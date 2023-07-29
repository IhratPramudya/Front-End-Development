/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSearch from './ButtonSearch';
import ButtonLogout from './button/ButtonLogout';

function Navigation({ onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Music</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" to="/home"><a>Home</a></Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/album"><a>Albums</a></Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/song"><a>Songs</a></Link></li>
                        <li className="nav-item"><ButtonLogout onLogout={onLogout} /></li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <ButtonSearch />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
