import React from 'react';
import "./PickPlaylist.css";
import { Helmet } from "react-helmet";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
} from 'recoil';
import { userIDState } from './atoms.js';


function PalletePage() {
  const { userID } = useRecoilState(userIDState);
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
            <h1 className='title-2'>pick which <br></br>playlist</h1>
          </div>
          <div>
            <h2>
              userID: {userID}
            </h2>
          </div>
      </div>
    </>
  );
}

export default PalletePage;
