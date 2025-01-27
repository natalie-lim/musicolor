import React, { useEffect } from 'react';
import "./PickGenre.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  useRecoilState,
} from 'recoil';
import { genreState, userIDState } from './atoms.js';
import axios from "axios";

function PickPlaylist() {
  const [userID] = useRecoilState(userIDState);
  const [genre, setGenreState] = useRecoilState(genreState);
  const navigate = useNavigate();

  //Wanted to do an API call but it didn't work out...
  /*
    useEffect (() => {
      axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          'grant_type': 'client_credentials',
          'client_id': '95b9977cf0a04a23b8809a88d03f7467',
          'client_secret': '8bf5e27b2e664326af64e65737ac498f'
        })
      ).then((r1) => {
        let access_token = r1.data.access_token;
        const response =  axios.get('https://api.spotify.com/v1/users/95b9977cf0a04a23b8809a88d03f7467/playlists', {
          headers: {
            'Authorization': 'Bearer  ' + access_token
          }
          }).then((response) => {
            console.log(response);
          });
        })
      }, ); */

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="profile-page">
        <div className="rectangle">
          <svg
            width="35vw"
            height="80vh"
            className="background-rectangle"
            style={{ position: "absolute", top: "10vh", left: "25vh", zIndex: 0 }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient)" />
          </svg>
          <h1 className='title-2'>Hi {userID},<br></br>pick which<br></br>genre</h1>
        </div>

{/*I know this is horrible style but unfortunately I couldn't figure out how to get this into two columns otherwise*/}
        <div className="button-container">
          <div className='column-buttons'>
            {["classical", "country", "indie", "edm"].map((genre, index) => (
              <button
                key={index}
                className="genre-button"
                onClick = {() => {
                  setGenreState(genre);
                  navigate("/colorpalette");
                }}
              >
                {genre}
              </button>
            ))}
          </div>
          <div className='column-buttons'>
            {["pop", "rock", "hip-hop", "jazz"].map((genre, index) => (
              <button
                key={index}
                className="genre-button"
                onClick = {() => {
                  setGenreState(genre);
                  navigate("/colorpalette");
                }}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PickPlaylist;
