# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS extension
from pytube import Playlist, YouTube

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/download_playlist', methods=['POST'])
def download_playlist():
    try:
        playlist_url = request.json.get('playlist_url')
        pl = Playlist(playlist_url)

        i = 0
        results = []

        for video_url in pl.video_urls:
            i = i + 1
            try:
                yt = YouTube(video_url)
                video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
                video.download(f"Videos/{yt.author}")
                results.append({"status": "success", "message": f"Video {i} downloaded successfully"})
            except:
                results.append({"status": "error", "message": f"Failed to download video {i}"})
                continue

        return jsonify({"status": "success", "results": results})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
