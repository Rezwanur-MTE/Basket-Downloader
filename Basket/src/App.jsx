import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import './style.css'

function App() {
  const [count, setCount] = useState(0)
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
    <>
      <div className='navbar'>
        <h2>LOGO</h2>
        <h5> Powered by Blocklab.online</h5>
      </div>
      <div className='container'>
      <div className='product'>
     <h2> Basket Playlist Downloader</h2>
     <h6> make sure it is a playlist</h6>
     <input type="text" value={playlistUrl} onChange={(e) => setPlaylistUrl(e.target.value)} />
      <button onClick={handleDownload}>Download </button>

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
      <div className='advertising'>

        <h3> Billboard </h3>

      </div>

      </div>
     

   </>
    
  )
}

export default App
