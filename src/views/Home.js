import React from 'react';
import { uploadAvatar } from '../services/avatars';
import { logout } from '../services/users';

import './Home.css';

export default function Home({ currentUser, setCurrentUser }) {
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  const uploadFile = (e) => {
    uploadAvatar(currentUser.id, e.target.files[0]);
  };

  return (
    <div className="home">
      <h1>{currentUser.email}</h1>
      {currentUser.avatar && <img className="avatar" src={currentUser.avatar} />}
      <input type="file" onChange={uploadFile} className="button" />
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
}
