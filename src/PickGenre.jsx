import "./css/PickGenre.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
  useRecoilState,
} from 'recoil';
import { genreState, userIDState } from './atoms.js';

function PickPlaylist() {
  const [userID] = useRecoilState(userIDState);
  const [genre, setGenreState] = useRecoilState(genreState);
  const navigate = useNavigate();

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
          <h1 className='title-2'>Hi <br></br>{userID},<br></br>pick which<br></br>genre</h1>
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
            {["pop", "rock", "hiphop", "jazz"].map((genre, index) => (
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
