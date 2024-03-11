import React from 'react';
import { useState } from 'react';

const CreatePlaylistPopup = ({ onCreate, onCancel }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleCreate = () => {
    onCreate(playlistName);
    setPlaylistName('');
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Create a New Playlist</h2>
        <input
          type="text"
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <button onClick={handleCreate}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CreatePlaylistPopup;