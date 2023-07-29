/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonUpdate from '../ButtonUpdate';
import useInput from '../../hooks';
import { updateSong } from '../../utils/network';

function UpdateSong({
    id, title, year, genre, performer, duration, albums, getSongDetailFunct,
}) {
    const [valueTitle, onTitleChangeHandler] = useInput('');
    const [valueGenre, onGenreChangeHandler] = useInput('');
    const [valuePerformer, onPerformerChangeHandler] = useInput('');
    const [valueDuration, onDurationChangeHandler] = useInput('');
    const [valueYear, onYearChangeHandler] = useInput('');
    const [valueAlbums, onAlbumsChange] = useInput('');

    function onUpdateEventHandler() {
        const updateSongFetc = async () => {
            const { error } = await updateSong({
                title: valueTitle, year: valueYear, genre: valueGenre, performer: valuePerformer, duration: valueDuration, albumId: valueAlbums,
            }, id);

            if (!error) {
                getSongDetailFunct();
            }
        };

        updateSongFetc();
    }

    return (
        <div className="col">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Update {title}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={title} value={valueTitle} onChange={onTitleChangeHandler} />
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Genre</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={genre} value={valueGenre} onChange={onGenreChangeHandler} />
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Performer</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={performer} value={valuePerformer} onChange={onPerformerChangeHandler} />
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Duration</span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={duration} value={valueDuration} onChange={onDurationChangeHandler} />
                        </div>
                        <div className="input-group input-group-lg mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Year</span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={year} value={valueYear} onChange={onYearChangeHandler} />
                        </div>
                        <select className="form-select text-center" value={valueAlbums} aria-label="Default select example" onChange={onAlbumsChange}>
                            <option selected>Open this select menu</option>
                            {albums.map((album) => (
                                <option key={album.id} value={album.id}>{album.name}</option>
                            ))}
                        </select>
                        <ButtonUpdate update={onUpdateEventHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}

UpdateSong.propTypes = {
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    performer: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    albums: PropTypes.array.isRequired,
};

export default UpdateSong;
