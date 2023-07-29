/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { getAlbums } from '../utils/network';
import AddAlbum from '../component/albums/AddAlbum';
import AlbumList from '../component/albums/AlbumList';

function AlbumsPage() {
    const [albums, setAlbum] = React.useState([]);

    React.useEffect(() => {
        const fetchDataAlbums = async () => {
            const { data, error } = await getAlbums();

            if (error) {
                return;
            }

            if (data === null) {
                return;
            }

            setAlbum(() => data.album);
        };

        fetchDataAlbums();
    }, []);

    const getAlbumsHandler = async () => {
        const { data, error } = await getAlbums();

        if (error) {
            return;
        }

        if (data === null) {
            return;
        }

        setAlbum(() => data.album);
    };

    return (
        <div className="container">
            <AddAlbum getAlbumsFunc={getAlbumsHandler} />
            <AlbumList albums={albums} getAlbumsFunc={getAlbumsHandler} />
        </div>
    );
}

export default AlbumsPage;
