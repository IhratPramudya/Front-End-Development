/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
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
import ButtonUpdate from '../ButtonUpdate';
import useInput from '../../hooks';
import { updateAlbum, uploadImageAlbum } from '../../utils/network';
import useInputImage from '../../hooks/image';

function UpdateAlbum({
    id, name, year, getAlbumDetailFunct,
}) {
    const [valueName, onNameChangeHandler] = useInput('');
    const [valueYear, onYearChangeHandler] = useInput('');
    const [valueImage, onImageChangeHandler] = useInputImage();

    async function onUpdateEventHandler() {
        const updateAlbumFetc = async () => {
            const { error } = await updateAlbum({
                name: valueName, year: valueYear,
            }, id);

            if (!error) {
                getAlbumDetailFunct();
            }
        };
        updateAlbumFetc();
    }

    function onUploadImageHandler() {
        const formData = new FormData();
        formData.append('cover', valueImage);

        const updateImageFunc = async () => {
            const { error } = await uploadImageAlbum(formData, id);

            if (!error) {
                getAlbumDetailFunct();
            }
        };

        updateImageFunc();
    }

    return (
        <div className="col">
            <div className="accordion accordion-flush p-4" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Update {name}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse p-4" data-bs-parent="#accordionFlushExample">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Albums</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={name} value={valueName} onChange={onNameChangeHandler} />
                            </div>
                            <div className="input-group input-group-lg mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Year</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder={year} value={valueYear} onChange={onYearChangeHandler} />
                            </div>
                            <ButtonUpdate update={onUpdateEventHandler} />
                            <div className="input-group input-group-lg mb-3 mt-3">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Image</span>
                                <input type="file" className="form-control" accept="image/*" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Masukan Tahun" onChange={onImageChangeHandler} />
                            </div>
                            <button type="button" className="btn btn-warning" onClick={onUploadImageHandler}>Ayo upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateAlbum;
