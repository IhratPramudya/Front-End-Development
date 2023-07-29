/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumId } from '../utils/network';
import DetailAlbum from '../component/albums/DetailAlbum';

function DetailAlbumPage() {
    const [albums, setAbums] = React.useState({});
    const { id } = useParams();
    React.useEffect(() => {
        const fetchDataAlbums = async () => {
            const { data } = await getAlbumId(id);
            console.log(data.album);

            setAbums(() => data.album);
        };

        fetchDataAlbums();
    }, []);

    const gedAlbumsHandler = async () => {
        const { data } = await getAlbumId(id);

        setAbums(() => data.album);
    };

    if (albums.length === 0) {
        return (
            <div className="container">
                <h1>ALbum Tidak Ditemukan</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <DetailAlbum id={albums.id} {...albums} getAlbumDetailFunct={gedAlbumsHandler} songs={albums.songs} />
        </div>
    );
}

export default DetailAlbumPage;
