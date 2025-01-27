import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
} from 'recoil';
import { userIDState } from './atoms.js';
import axios from "axios";

function App() {
  const [userID, setUserID] = useRecoilState(userIDState);
  const [dots, setDots] = useState([]);
  const navigate = useNavigate();

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const generateDots = () =>
      Array.from({ length: 50 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        color: getRandomColor(),
        diameter: `${Math.random() * 200}px`,
      }));
    setDots(generateDots());
  }, []);

  const handleInputChange = (event) => {
    setUserID(event.target.value);
  };

  const handleEnterUserID = (event) => {
    if (event.key === "Enter") {
      if (userID.trim()) {
        navigate("/pickplaylist");
      } else {
        alert("Please enter your userID (not username).");
      }
    }
  };

  return (
    <RecoilRoot>
      
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="app">
      <div className="rectangle">
          <svg
            width="60vw"
            height="70vh"
            className="background-rectangle"
            style={{ position: "absolute", top: "15vh", left: "38vh", zIndex: 0 }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
            </defs>
            <rect fill="url(#gradient)" blur= "radius"/>
          </svg>
        </div>

        <div className="content" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="title">musicolor</h1>
          <h2 className="description">generate a color palette based on <br></br> <br></br>your favorite spotify playlist</h2>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="enter spotify userID"
              value={userID}
              onChange={handleInputChange}
              onKeyDown={handleEnterUserID}
            />
          </div>
        </div>
        <div className="background">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="dot"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.diameter,
                height: dot.diameter,
                animationDelay: dot.animationDelay,
                backgroundColor: dot.color,
                boxShadow: `0 0 10px 3px ${dot.color}`,
              }}
            ></div>
          ))}
        </div>
      </div>
      </RecoilRoot>
  );
}

export default App;