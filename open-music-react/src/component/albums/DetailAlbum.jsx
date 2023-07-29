/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import UpdateAlbum from './UpdateAlbums';
import SongsListDetail from './SongsListDetail';

function DetailAlbum({
    id, name, year, coverUrl, getAlbumDetailFunct, songs,
}) {
    console.log(songs);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="accordion accordion-flush p-4" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    {name}
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text">{name}</p>
                                    <h5 className="card-title">Year</h5>
                                    <p className="card-text">{year}</p>
                                    <h5 className="card-title">Cover</h5>
                                    <img src={coverUrl} className="card-img-top img-thumbnail object-fit-contain" alt="Gambar Albums" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <UpdateAlbum id={id} name={name} year={year} getAlbumDetailFunct={getAlbumDetailFunct} />
                </div>
            </div>

            <div className="row">
                <SongsListDetail songs={songs} />
            </div>
        </div>
    );
}

DetailAlbum.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    coverUrl: PropTypes.string.isRequired,
};

export default DetailAlbum;
