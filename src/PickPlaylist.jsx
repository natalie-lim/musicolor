import React, { useEffect } from 'react';
import "./PickPlaylist.css";
import { Helmet } from "react-helmet";
import {
  useRecoilState,
} from 'recoil';
import { userIDState } from './atoms.js';
import axios from "axios";


function PickPlaylist() {
  const [userID] = useRecoilState(userIDState);

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
        const response =  axios.get('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
          headers: {
            'Authorization': 'Bearer  ' + access_token
          }
          }).then((response) => {
            console.log(response);
          });
        })
      });

    /**curl "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb" \
     -H "Authorization: Bearer  BQDZrrGarHgRbECnyJR9Ybnr9A3bKCcUHacG-eKXVLMpsef481sWHf03cDaSm65zhi4r_aXSw4GObV-qG6TAiEv0U_wlUJO2bYEZg8yOrLOp-w_k7cQ

    /**
     * import axios from 'axios';

const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
  headers: {
    'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z'
  }
});
     */
  
      /**
       * curl -X POST "https://accounts.spotify.com/api/token" \
       -H "Content-Type: application/x-www-form-urlencoded" \
       -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
  
       */

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
              <rect fill="url(#gradient)" blur= "radius"/>
            </svg>
            <h1 className='title-2'>pick which<br></br>playlist</h1>
          </div>
      </div>
    </>
  );
}

export default PickPlaylist;
