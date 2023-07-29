/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getSongId } from '../utils/network';
import DetailSongs from '../component/Song/DetailSong';

function DetailSongPage() {
    const [songs, setSongs] = React.useState({});
    const { id } = useParams();
    React.useEffect(() => {
        const fetchDataSongs = async () => {
            const { data } = await getSongId(id);

            setSongs(() => data.song);
        };

        fetchDataSongs();
    }, []);

    const getSongHandler = () => {
        const fetc = async () => {
            const { data } = await getSongId(id);

            setSongs(() => data.song);
        };

        fetc();
    };

    return (
        <div className="container">
            <DetailSongs id={songs.id} {...songs} getSongDetailFunct={getSongHandler} />
        </div>
    );
}

export default DetailSongPage;
