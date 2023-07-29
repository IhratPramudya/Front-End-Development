/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { getAlbums, getSongs } from '../utils/network';
import ContentList from '../component/HeadRight/ContentList';
import AlbumList from '../component/albums/AlbumList';

function HomePage() {
    const [songs, setSongs] = React.useState([]);
    const [albums, setAlbum] = React.useState([]);

    const location = useLocation();

    React.useEffect(() => {
        const fetchDataSongs = async () => {
            const { data } = await getSongs();

            setSongs(() => data.songs);
        };

        fetchDataSongs();
    }, [location.pathname]);

    const getSongsHandler = async () => {
        const { data } = await getSongs();

        setSongs(() => data.songs);
    };

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
            <h2>Albums</h2>
            <AlbumList albums={albums} getAlbumsFunc={getAlbumsHandler} />
            <div style={{ margin: '20px' }} />
            <h2>Songs</h2>
            <ContentList songs={songs} getSongsFunc={getSongsHandler} />

        </div>
    );
}

export default HomePage;
