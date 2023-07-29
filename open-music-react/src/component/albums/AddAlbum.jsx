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
import { addAlbumsNetwork } from '../../utils/network';

function AddAlbum({ getAlbumsFunc }) {
    const [valueName, onNameChangeHandler] = useInput('');
    const [valueYear, onYearChangeHandler] = useInput('');

    function addAlbumsHandler() {
        const addAlbumsFetc = async () => {
            const { error } = await addAlbumsNetwork({
                name: valueName,
                year: valueYear,
            });

            if (!error) {
                getAlbumsFunc();
            }
        };

        addAlbumsFetc();
    }

    return (
        <div className="row">
            <div className="col" style={{ marginBottom: '20px' }}>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Albums</button><div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">New Albums</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Masukkan Nama" value={valueName} onChange={onNameChangeHandler} />
                                </div>
                                <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Year</span>
                                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Masukan Tahun" value={valueYear} onChange={onYearChangeHandler} />
                                </div>
                                {/* <div className="input-group input-group-lg mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Image</span>
                                    <input type="file" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Masukan Tahun" onChange={onImageChangeHandler} />
                                </div> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={addAlbumsHandler} className="btn btn-primary">Save Albums</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddAlbum;
