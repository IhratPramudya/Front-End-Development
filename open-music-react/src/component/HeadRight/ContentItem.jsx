/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteSong } from '../../utils/network';

function ContentItem({
    key, id, title, performer,
    getSongsFunc,
}) {
    const deleteHandler = () => {
        const deleteSongFunc = async () => {
            const { error } = await deleteSong(id);

            if (!error) {
                getSongsFunc();
            }
        };

        deleteSongFunc();
    };
    return (
        <div key={key} className="card p-4" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{performer}</p>
                <Link to={`/song/${id}`} className="btn btn-primary" style={{ margin: '10px' }}>Yuk Lihat</Link>
                <button className="btn btn-primary" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

ContentItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    performer: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
};

export default ContentItem;
