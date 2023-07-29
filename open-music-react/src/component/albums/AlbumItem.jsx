/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAlbums } from '../../utils/network';

function AlbumItem({
    key, id, name, year, cover, getAlbumsFunc,
}) {
    const deleteHandler = () => {
        const deleteAlbumFunc = async () => {
            const { error } = await deleteAlbums(id);

            if (!error) {
                getAlbumsFunc();
            }
        };

        deleteAlbumFunc();
    };
    return (
        <div key={key} className="card p-4" style={{ width: '18rem' }}>
            <img src={cover} className="card-img-top img-thumbnail object-fit-contain" style={{ width: '300px', height: '160px' }} alt="Gambar Albums" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{year}</p>
                <Link to={`/album/${id}`} className="btn btn-primary" style={{ margin: '10px' }}>Yuk Lihat</Link>
                <button className="btn btn-primary" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default AlbumItem;
