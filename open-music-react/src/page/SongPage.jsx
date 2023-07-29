/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { getSongs } from '../utils/network';
import ContentList from '../component/HeadRight/ContentList';
import AddSong from '../component/Song/AddSong';

function SongPage() {
    const [songs, setSongs] = React.useState([]);

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

    return (
        <div className="container">
            <AddSong getSongsFunc={getSongsHandler} />
            <ContentList songs={songs} getSongsFunc={getSongsHandler} />
        </div>
    );
}

export default SongPage;
