/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import AlbumItem from './AlbumItem';

function AlbumList({ albums, getAlbumsFunc }) {
    if (albums.length === 0) {
        return (
            <div className="row gy-5">
                <h1>Album Tidak Ditemukan</h1>
            </div>
        );
    }

    return (
        <div className="row gy-5">

            {albums.map((album) => (
                <div className="col-4">
                    <AlbumItem key={album.id} id={album.id} {...album} getAlbumsFunc={getAlbumsFunc} />
                </div>
            ))}
        </div>
    );
}

export default AlbumList;
