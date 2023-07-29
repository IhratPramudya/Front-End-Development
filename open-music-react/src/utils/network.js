/* eslint-disable indent */
const BASE_URL = 'http://localhost:5000';

function getAccessToken() {
    return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}

async function login({ username, password }) {
    const response = await fetch(`${BASE_URL}/authentications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function register({ username, password, fullname }) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, fullname }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/logged`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function addNote({ title, body }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getArchivedNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function archiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
        method: 'POST',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function unarchiveNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
        method: 'POST',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function deleteNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getSongs() {
    const response = await fetchWithToken(`${BASE_URL}/songs`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getSongId(id) {
    const response = await fetchWithToken(`${BASE_URL}/songs/${id}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function updateSong({
    title, year, genre, performer, duration, albumId,
}, id) {
    const response = await fetchWithToken(`${BASE_URL}/songs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title, year, genre, performer, duration, albumId,
        }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, message: 'Data Gagal Di Update' };
    }

    return { error: false, message: responseJson.message };
}

async function getAlbums() {
    const response = await fetch(`${BASE_URL}/albums`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function addSongNetwork({
    title,
    year,
    performer,
    genre,
    duration,
    albumId,
}) {
    const response = await fetchWithToken(`${BASE_URL}/songs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            year,
            performer,
            genre,
            duration,
            albumId,
        }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function deleteSong(id) {
    const response = await fetchWithToken(`${BASE_URL}/songs/${id}`, {
        method: 'DELETE',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function deleteAlbums(id) {
    const response = await fetchWithToken(`${BASE_URL}/albums/${id}`, {
        method: 'DELETE',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function addAlbumsNetwork({
    name,
    year,
}) {
    const response = await fetchWithToken(`${BASE_URL}/albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            year,
        }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getAlbumId(id) {
    const response = await fetchWithToken(`${BASE_URL}/albums/${id}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function updateAlbum({
    name, year,
}, id) {
    const response = await fetchWithToken(`${BASE_URL}/albums/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name, year,
        }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, message: 'Data Gagal Di Update' };
    }

    return { error: false, message: responseJson.message };
}

async function uploadImageAlbum(formData, id) {
    const response = await fetch(`${BASE_URL}/albums/${id}/covers`, {
        method: 'POST',
        headers: {
        },
        body: formData,
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    addNote,
    getActiveNotes,
    getArchivedNotes,
    getNote,
    archiveNote,
    unarchiveNote,
    deleteNote,
    getSongs,
    getSongId,
    updateSong,
    getAlbums,
    addSongNetwork,
    deleteSong,
    deleteAlbums,
    addAlbumsNetwork,
    getAlbumId,
    updateAlbum,
    uploadImageAlbum,
};
