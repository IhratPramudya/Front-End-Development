/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import useInput from '../../hooks';
import { addSongNetwork, getAlbums } from '../../utils/network';

function AddSong({ getSongsFunc }) {
    const [valueTitle, onTitleChangeHandler] = useInput('');
    const [valueGenre, onGenreChangeHandler] = useInput('');
    const [valuePerformer, onPerformerChangeHandler] = useInput('');
    const [valueDuration, onDurationChangeHandler] = useInput('');
    const [valueYear, onYearChangeHandler] = useInput('');
    const [valueAlbums, onAlbumsChange] = useInput('');
    const [albums, setAlbums] = React.useState([]);

    function addSongsHandler() {
        const addSongFetc = async () => {
            const { error } = await addSongNetwork({
                title: valueTitle,
                year: valueYear,
                performer: valuePerformer,
                genre: valueGenre,
                duration: valueDuration,
                albumId: valueAlbums,
            });

            if (!error) {
                getSongsFunc();
            }
        };

        addSongFetc();
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getAlbums();

            if (error) {
                return;
            }

            if (data === null) {
                return;
            }

            setAlbums(() => data.album);
        };

        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col" style={{ marginBottom: '20px' }}>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Music</button><div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">New Music</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Masukkan Title" value={valueTitle} onChange={onTitleChangeHandler} />
                                </div>
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Year</span>
                                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Masukan Tahun" value={valueYear} onChange={onYearChangeHandler} />
                                </div>
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Genre</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Genre" value={valueGenre} onChange={onGenreChangeHandler} />
                                </div>
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Performer</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="performer" value={valuePerformer} onChange={onPerformerChangeHandler} />
                                </div>
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Duration</span>
                                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="duration" value={valueDuration} onChange={onDurationChangeHandler} />
                                </div>
                                <select className="form-select text-center" value={valueAlbums} aria-label="Default select example" onChange={onAlbumsChange}>
                                    <option selected>Open this select menu</option>
                                    {albums.map((album) => (
                                        <option key={album.id} value={album.id}>{album.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={addSongsHandler} className="btn btn-primary">Save Music</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSong;
