/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import UpdateSong from './UpdateSong';
import { getAlbums } from '../../utils/network';

function DetailSongs({
    id, title, year, genre, performer, duration, getSongDetailFunct,
}) {
    const [albums, setAlbums] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const { data } = await getAlbums();

            setAlbums(() => data.album);
        };

        fetchData();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    {title}
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <h5 className="card-title">Genre</h5>
                                    <p className="card-text">{genre}</p>
                                    <h5 className="card-title">Performer</h5>
                                    <p className="card-text">{performer}</p>
                                    <h5 className="card-title">Duration</h5>
                                    <p className="card-text">{duration}</p>
                                    <h5 className="card-title">Year</h5>
                                    <p className="card-text">{year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <UpdateSong id={id} title={title} year={year} genre={genre} performer={performer} duration={duration} albums={albums} getSongDetailFunct={getSongDetailFunct} />
                </div>
            </div>
        </div>
    );
}

DetailSongs.propTypes = {
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    performer: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};

export default DetailSongs;
