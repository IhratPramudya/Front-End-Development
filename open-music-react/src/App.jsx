/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import Navigation from './component/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/style.css';
import SongPage from './page/SongPage';
import DetailSongPage from './page/DetailSongPage';
import AlbumsPage from './page/AlbumsPage';
import DetailAlbumPage from './page/DetailAlbumPage';
import HomePage from './page/HomePage';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setinitializing] = React.useState(true);

  async function onLoginSuccessHandler({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setinitializing(false);
    };

    fetchData();
  }, []);

  function onLogout() {
    setAuthedUser(null);

    putAccessToken('');
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="app">
        <header>
          <div>
            <a><Link to="/register" /></a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccessHandler} />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <div>
          <div>
            <Navigation onLogout={onLogout} />
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/song" element={<SongPage />} />
          <Route path="/song/:id" element={<DetailSongPage />} />
          <Route path="/album" element={<AlbumsPage />} />
          <Route path="/album/:id" element={<DetailAlbumPage />} />
          <Route path="/home*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
