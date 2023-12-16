// src/components/DownloadComponent.js

import React, { useState } from 'react';
import axios from 'axios';

const DownloadComponent = () => {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [downloadStatus, setDownloadStatus] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await axios.post('http://localhost:5000/download_playlist', { playlist_url: playlistUrl });
      console.log(response.data);

      setDownloadStatus(response.data);
    } catch (error) {
      console.error('Error downloading playlist:', error);
    }
  };

  return (
    <div>
      <input type="text" value={playlistUrl} onChange={(e) => setPlaylistUrl(e.target.value)} />
      <button onClick={handleDownload}>Download Playlist</button>

      {downloadStatus && (
        <div>
          <h2>Download Status</h2>
          <ul>
            {downloadStatus.results.map((result, index) => (
              <li key={index}>{result.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DownloadComponent;
