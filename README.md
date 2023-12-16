# Basket-Downloader
Using Pytube
1.first install flask :
   pip install Flask
2. importing code to python main code and generating api .
3. then install axios for calling that flask api :
   npm install axios 
4. Start react js with vite, install vite :
   npm create vite@latest
5. To prevent axios error , run:
   pip install flask-cors
6. Then import CORS in app.py
7. Everything need to import :
   from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS extension
from pytube import Playlist, YouTube

8.  Run Both Servers
Make sure to run both Flask server (python app.py) and React server (npm run dev) simultaneously.
split terminal powershell into two part then run :
python app.py
npm run dev

and DONE.
